"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { BASE_URL } from "./api";
import { requestJSON } from "./request";
import { IError, FormState, IPhoto, IComment } from "@/types/global";
import { revalidatePath } from "next/cache";

interface IPhotoQuery {
  total?: number;
  page?: number;
  user?: number;
}

interface IPhotoWithComments {
  photo: IPhoto;
  comments: IComment[];
}

const PHOTO_GET = (query: IPhotoQuery = {}) => {
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

const PHOTO_BY_ID_GET = (id: number | string) =>
  ({
    endpoint: `${BASE_URL}/api/photo/${id}`,
    method: "GET",
  }) as const;

const PHOTO_POST = (token: string, formData: FormData) =>
  ({
    endpoint: `${BASE_URL}/api/photo`,
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  }) as const;

const PHOTO_DELETE = (token: string, id: string | number) =>
  ({
    endpoint: `${BASE_URL}/api/photo/${id}`,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  }) as const;

export async function getPhotos(query: IPhotoQuery = {}) {
  return await requestJSON<IPhoto[]>(PHOTO_GET(query));
}

export async function getPhotoById(id: number | string) {
  return await requestJSON<IPhotoWithComments>(PHOTO_BY_ID_GET(id));
}

export async function postPhoto(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const token = cookies().get("token")?.value ?? "";
  const response = await requestJSON<IError>(PHOTO_POST(token, formData));

  if (!response || response?.code === "error")
    return {
      data: null,
      ok: false,
      error: response?.message ?? "Dados incorretos",
    };

  revalidatePath("/");
  redirect("/conta");

  return {
    data: JSON.stringify(response) ?? null,
    ok: true,
    error: "",
  };
}

export async function deletePhoto(token: string, id: number | string) {
  return await requestJSON<IPhoto>(PHOTO_DELETE(token, id));
}
