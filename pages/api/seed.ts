import type { NextApiRequest, NextApiResponse } from "next";
import { DB, seedData } from "@/database";
import { models } from "@/database";
import { Data } from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(401)
      .json({ data: { message: "Servicio no autorizado" }, status: 401 });
  }
  await DB.connect();
  await models.EntryModel.deleteMany();
  await models.EntryModel.insertMany(seedData.entries);
  await DB.disconnect();

  res
    .status(200)
    .json({ data: { message: "Servicio completado" }, status: 200 });
}
