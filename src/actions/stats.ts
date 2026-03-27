import { IPhotoStats } from "@/types/global";
import { BASE_URL } from "./api";
import { requestJSON } from "./request";

const STATS_GET = (token: string) =>
  ({
    endpoint: BASE_URL + "/api/stats",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) as const;

export async function getStats(token: string) {
  return await requestJSON<IPhotoStats[]>(STATS_GET(token));
}
