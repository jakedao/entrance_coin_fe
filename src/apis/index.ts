import { instance } from "../utils";

import { ICoin } from "@/models";

export const getCoinList = async (): Promise<ICoin[]> => {
  return instance.get("/coins");
};
