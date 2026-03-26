"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/Button";
import { login } from "@/actions/auth";
import { FormState } from "@/types/global";

interface IBtnLabel {
  labelText: string;
  labelLoading: string;
}

type LoginProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "action"> &
  IBtnLabel & {
    serverAction?: (
      prevState: FormState,
      formData: FormData,
    ) => Promise<FormState>;
    initialState?: FormState;
  };

const SubmitButton = ({ labelLoading, labelText }: IBtnLabel) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? labelLoading : labelText}
    </Button>
  );
};

export default function LoginForm({
  children,
  labelText,
  labelLoading,
  serverAction = login,
  initialState = { data: null, ok: false, error: "" },
  ...props
}: LoginProps) {
  const [state, formAction] = useFormState(serverAction, initialState);

  return (
    <form {...props} action={formAction}>
      {children}

      {state.error && (
        <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>
          {state.error}
        </p>
      )}

      {state.data && typeof state.data === "string" ? (
        <p style={{ color: "rgb(68, 204, 17)" }}>{state.data}</p>
      ) : (
        <SubmitButton labelText={labelText} labelLoading={labelLoading} />
      )}
    </form>
  );
}
