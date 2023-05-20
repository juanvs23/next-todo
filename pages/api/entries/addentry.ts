import type { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '@/database';
import { Data } from '@/models';
import { models } from '@/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { title, description, status } = req.body;
  await DB.connect();
  const entry = await models.EntryModel.create({
    title,
    description,
    status,
  });
  res.status(200).json({ status: 200, data: { message: 'Entry saved', entry } });
}
