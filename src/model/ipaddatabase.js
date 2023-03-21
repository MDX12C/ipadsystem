import { Deta } from "deta";
import dotenv from "dotenv";

dotenv.config();

const deta = Deta(process.env.DATABASE_KEY);

export const register = async (schoolNumber, ipadNumber) => {
  const date = new Date();

  const dbTime =
    date.getFullYear().toString() +
    date.getMonth().toString() +
    date.getDate().toString();

  const db = deta.Base(dbTime);
  const res = await db.put({ schoolNumber, ipadNumber }, schoolNumber);
  return res;
};
