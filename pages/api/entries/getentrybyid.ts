import { DB } from '@/database';
import { Data } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { models } from '@/database';
import { isMongoId } from '@/utils';

interface QueryParams extends NextApiRequest {
  params: {
    id: string;
  };
}
export default async function handler(req: QueryParams, res: NextApiResponse<Data>) {
  const { id } = req.query as { id: string };
  if (isMongoId(id) === 'is not mongoId') {
    return res
      .status(400)
      .json({ data: { messages: `the id ${id} is not valid mongoId` }, status: 400 });
  }
  await DB.connect();
  const entry = await models.EntryModel.findOne({ _id: id, status: { $ne: 'deleted' } });
  //await DB.disconnect();
  if (entry == null) {
    return res.status(404).json({ data: { messages: 'not found' }, status: 404 });
  }
  res.status(200).json({ data: { messages: 'ok', entry }, status: 200 });
}
