"use server";

import { BASE_URL } from "./api";
import { requestJSON } from "./request";
import type { LoginState } from "@/types/global";

const PASSWORD_LOST_POST = (login: string, url: string) =>
  ({
    endpoint: BASE_URL + "/api/password/lost",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      url,
    }),
  }) as const;

const PASSWORD_RESET_POST = (login: string, password: string, key: string) =>
  ({
    endpoint: BASE_URL + "/api/password/reset",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
      key,
    }),
  }) as const;

export async function resetPassword(
  _prevState: LoginState,
  formData: FormData,
) {
  const login = formData.get("login") as string;
  const url = formData.get("url") as string;
  const response = await requestJSON<string>(PASSWORD_LOST_POST(login, url));
  console.log(response);

  if (!response)
    return {
      data: null,
      ok: false,
      error: "Email ou usuário não cadastrado.",
    };

  return {
    data: response,
    ok: true,
    error: "",
  };
}
