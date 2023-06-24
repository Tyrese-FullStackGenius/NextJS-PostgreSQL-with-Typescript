import type { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../utils/database";

type Data = {
  statusText: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const query = {
      text: "INSERT INTO step_addition (steps) VALUES ($1)",
      values: [JSON.stringify(req.body.steps)],
    };
    const response = await conn.query(query);
    console.log(response);

    res.status(201).json({ statusText: "OK" });
  } catch (error) {
    res.status(400).json({ statusText: "ERROR" });
  }
}
