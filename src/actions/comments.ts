"use server";

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
  const token = formData.get("token") as string;
  const id = formData.get("id") as string;
  const comment = formData.get("comment") as string;

  const response = await requestJSON<FormState>(
    COMMENT_POST(token, id, comment),
  );

  if (!response)
    return {
      data: null,
      ok: false,
      error: "Comentário nao enviado.",
    };

  revalidatePath(`/foto/${id}`);

  return {
    data: JSON.stringify(response) ?? null,
    ok: true,
    error: "",
  };
}

export async function getComments(id: number | string) {
  return await requestJSON<IComment[]>(COMMENT_GET(id));
}
