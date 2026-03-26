"use server";

import { BASE_URL } from "./api";
import type { IError, FormState } from "@/types/global";
import { requestJSON } from "./request";
import { redirect } from "next/navigation";

interface IUser {
  email: string;
  id: number;
  nome: string;
  username: string;
}

const emptyUser: IUser = { email: "", username: "", nome: "", id: 0 };

const USER_POST = (username: string, password: string, email: string) =>
  ({
    endpoint: BASE_URL + "/api/user",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  }) as const;

const USER_GET = (token: string) =>
  ({
    endpoint: BASE_URL + "/api/user",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) as const;

export async function createUser(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const email = formData.get("email") as string;

  const response = await requestJSON<IError>(
    USER_POST(username, password, email),
  );

  if (!response || response?.code === "error")
    return {
      data: null,
      ok: false,
      error: response?.message ?? "Dados incorretos",
    };

  redirect("/login");

  return {
    data: JSON.stringify(response) ?? null,
    ok: true,
    error: "",
  };
}

export async function getUser(token: string): Promise<IUser> {
  if (!token) return emptyUser;
  return (await requestJSON<IUser>(USER_GET(token))) ?? emptyUser;
}
