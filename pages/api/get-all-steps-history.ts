import type { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../utils/database";

type Data = {
  statusText: string;
  all_steps: Array<Object>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await conn.query("SELECT * FROM step_addition");
    res.status(200).json({ statusText: "OK", all_steps: response.rows });
  } catch (error) {
    res.status(400).json({ statusText: "ERROR", all_steps: [] });
  }
}
