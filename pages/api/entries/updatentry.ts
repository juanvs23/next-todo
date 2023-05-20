import { DB } from '@/database';
import { Data } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { models } from '@/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { _id, title, description, status } = req.body;
  await DB.connect();
  const entry = await models.EntryModel.findByIdAndUpdate(
    _id,
    {
      title,
      description,
      status,
    },
    { new: true }
  );
  //await DB.disconnect();

  res.status(200).json({ data: { messages: 'ok', entry }, status: 200 });
}
