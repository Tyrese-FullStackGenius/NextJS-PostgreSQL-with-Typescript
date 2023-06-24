import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusText: string;
  steps: Object;
};

interface Steps {
  [key: string]: {
    carryString: string;
    sumString: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (
      req.body.num1 === undefined ||
      req.body.num2 === undefined ||
      typeof req.body.num1 !== "number" ||
      typeof req.body.num2 !== "number"
    ) {
      res.status(400).json({ statusText: "ERROR", steps: {} });
    }

    let { num1, num2 } = req.body;
    const steps = {};
    let carry = 0;
    let step = 1;
    let carryHistory = "_";
    let sumStringHistory = "";

    while (num1 > 0 || num2 > 0) {
      const digit1 = num1 % 10;
      const digit2 = num2 % 10;
      const sum = digit1 + digit2 + carry;

      const carryString =
        (num1 < 10 && num2 < 10 ? "" : sum >= 10 ? "1" : "0") + carryHistory;
      const sumString =
        (num1 < 10 && num2 < 10 ? sum : sum % 10) + sumStringHistory;
      carryHistory = carryString;
      sumStringHistory = sumString;

      steps["step" + step] = { carryString, sumString };

      carry = Math.floor(sum / 10);
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
      step++;
    }

    res.status(200).json({ statusText: "OK", steps });
  } catch (error) {
    res.status(400).json({ statusText: "ERROR", steps: {} });
  }
}
