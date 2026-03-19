import { BASE_URL } from "./api";
import { requestJSON } from "./request";

interface IPhoto {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
}

type PhotoQuery = {
  total?: number;
  page?: number;
  user?: number;
};

export const PHOTO_GET = (query: PhotoQuery = {}) => {
  const params = new URLSearchParams();

  if (query.total !== undefined) params.set("_total", String(query.total));
  if (query.page !== undefined) params.set("_page", String(query.page));
  if (query.user !== undefined) params.set("_user", String(query.user));

  const queryString = params.toString();
  const endpoint = queryString
    ? `${BASE_URL}/api/photo/?${queryString}`
    : `${BASE_URL}/api/photo`;

  return {
    endpoint,
    method: "GET",
  } as const;
};

export const PHOTO_BY_ID_GET = (id: number | string) =>
  ({
    endpoint: `${BASE_URL}/api/photo/${id}`,
    method: "GET",
  }) as const;

export const PHOTO_POST = (token: string, formData: FormData) =>
  ({
    endpoint: `${BASE_URL}/api/photo`,
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  }) as const;

export const PHOTO_DELETE = (token: string, id: string | number) =>
  ({
    endpoint: `${BASE_URL}/api/photo/${id}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  }) as const;

export async function getPhotos(query: PhotoQuery = {}) {
  return await requestJSON<IPhoto[]>(PHOTO_GET(query));
}
