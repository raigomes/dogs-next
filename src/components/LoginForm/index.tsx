"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import Input from "@/components/Input";
import Button from "@/components/Button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
};

export default function LoginForm(
  props: React.FormHTMLAttributes<HTMLFormElement>,
) {
  return (
    <form
      {...props}
      //   action={handleLogin}
    >
      <Input label="Usuário" type="text" name="username" />
      <Input label="Senha" type="password" name="password" />

      <SubmitButton />
    </form>
  );
}
