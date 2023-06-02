import { api } from "@/api";
import { CharacterAxiosResponse } from "@/types/character";

export const getCharacters = (
  name: string,
  page: number
): Promise<CharacterAxiosResponse> => {
  return api.get(`/character?name=${name}&page=${page}`);
};
