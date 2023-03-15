import { Deta } from "deta";
import dotenv from "dotenv";

dotenv.config();

const deta = Deta(process.env.DATABASE_KEY);

const db = deta.Base("ipads");

export const register = async (schoolNumber, classNumber, name, ipadNumber) => {
  const res = await db.put({ schoolNumber, classNumber, name, ipadNumber });
  return res;
};
