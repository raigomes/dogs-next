"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { BASE_URL } from "./api";
import { requestJSON } from "./request";

import { FormState, IComment } from "@/types/global";

const COMMENT_POST = (token: string, id: number | string, comment: string) =>
  ({
    endpoint: BASE_URL + "/api/comment/" + id,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      comment,
    }),
  }) as const;

const COMMENT_GET = (id: number | string) =>
  ({
    endpoint: BASE_URL + "/api/comment/" + id,
    method: "GET",
  }) as const;

export async function postComment(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const token = cookies().get("token")?.value;
    const id = formData.get("id") as string;
    const comment = formData.get("comment") as string;

    if (!token) throw new Error("Nao autenticado.");

    const response = await requestJSON<FormState>(
      COMMENT_POST(token, id, comment),
    );

    if (!response) throw new Error("Comentário nao enviado.");

    revalidatePath(`/foto/${id}`);

    return {
      data: JSON.stringify(response) ?? null,
      ok: true,
      error: "",
    };
  } catch (e: unknown) {
    return {
      data: null,
      ok: false,
      error: e instanceof Error ? e.message : "Erro desconhecido.",
    };
  }
}

export async function getComments(id: number | string) {
  return await requestJSON<IComment[]>(COMMENT_GET(id));
}
