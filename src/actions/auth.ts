"use server";

import { redirect } from "next/navigation";
import { BASE_URL } from "./api";
import { requestJSON } from "./request";
import { cookies } from "next/headers";

interface IToken {
  token: string;
}

export type LoginState = { error: string | null };

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

export async function login(_prevState: LoginState, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const response = await requestJSON<IToken>(TOKEN_POST(username, password));

  if (!response) return { error: "Senha ou usuário inválidos." };

  cookies().set("token", response.token, {
    httpOnly: true,
    secure: true,
  });

  redirect("/conta");

  return { error: "" };
}
