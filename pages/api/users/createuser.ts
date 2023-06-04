import type { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '@/database';
import { Data } from '@/models';
import { models } from '@/database';
import bycript from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { name, email, password } = req.body;
  const hash = await bycript.hash(password, 10);
  password = hash;

  await DB.connect();
  const getUser = await models.UserModel.findOne({ email });
  if (!getUser) {
    try {
      const entry = await models.UserModel.create({
        name,
        email,
        password,
        status: 'active',
      });
      return res.status(200).json({ status: 200, data: { message: 'user saved', entry } });
    } catch (error) {
      return res.status(500).json({ status: 500, data: { message: 'Error Server', error } });
    }
  }
  console.log(getUser);
  if (getUser.status === 'active') {
    return res.status(400).json({ status: 400, data: { message: 'User already exists' } });
  }
  if (getUser.status === 'pending') {
    return res.status(400).json({ status: 400, data: { message: 'Your account is pending' } });
  }
  if (getUser.status === 'inactive') {
    const reEntry = await models.UserModel.findOneAndUpdate(
      { email },
      { status: 'active' },
      { new: true }
    );
    return res.status(200).json({ status: 200, data: { message: 'User activated', reEntry } });
  }
}
