"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { login } from "@/actions/auth";

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
  const [state, formAction] = useFormState(login, {
    error: "",
  });

  return (
    <form action={formAction} {...props}>
      <Input label="Usuário" type="text" name="username" />
      <Input label="Senha" type="password" name="password" />

      {state.error && (
        <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
