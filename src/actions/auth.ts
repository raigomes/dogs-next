"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "./api";
import { requestJSON } from "./request";
import { cookies } from "next/headers";
import type { FormState, IError } from "@/types/global";

interface IToken {
  token: string;
}

const TOKEN_POST = (username: string, password: string) =>
  ({
    endpoint: BASE_URL + "/jwt-auth/v1/token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }) as const;

const TOKEN_VALIDATE_POST = (token: string) =>
  ({
    endpoint: BASE_URL + "/jwt-auth/v1/token/validate",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) as const;

export async function login(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const response = await requestJSON<IToken>(TOKEN_POST(username, password));

  if (!response)
    return { data: null, ok: false, error: "Senha ou usuário inválidos." };

  cookies().set("token", response.token, {
    httpOnly: true,
    secure: true,
  });

  redirect("/conta");

  return { data: JSON.stringify(response) ?? null, ok: true, error: "" };
}

export async function logout() {
  cookies().delete("token");
  redirect("/");
}

export async function validateToken(token: string) {
  const response = await requestJSON<IError>(TOKEN_VALIDATE_POST(token));
  return response?.data?.status === 200;
}
