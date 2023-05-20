import { DB } from "@/database";
import { Data } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import { models } from "@/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await DB.connect();
  const entries = await models.EntryModel.find().sort({ createAt: "asc" });
  //await DB.disconnect();

  res.status(200).json({ data: { messages: "ok", entries }, status: 200 });
}
