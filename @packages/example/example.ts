import bcrypt from "bcrypt";
import { test } from "@mocking/module-b";

export const getSixDigitRandom = (): string => {
  return Math.random().toString().slice(2, 8);
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 6);
};

export const test2 = () => test();
