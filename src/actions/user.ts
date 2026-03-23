"use server";

import { BASE_URL } from "./api";
import type { LoginState } from "@/types/global";
import { requestJSON } from "./request";
import { redirect } from "next/navigation";

interface IUser {
  code?: string;
  message?: string;
  data?: {
    status?: number;
  };
}

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

// const USER_GET = (token: string) =>
//   ({
//     endpoint: BASE_URL + "/api/user",
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }) as const;

export async function createUser(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const email = formData.get("email") as string;

  const response = await requestJSON<IUser>(
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
