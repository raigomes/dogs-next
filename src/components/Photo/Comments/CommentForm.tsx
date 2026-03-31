"use client";

import React from "react";
import { useFormState } from "react-dom";

import Input from "@/components/Input";
import { postComment } from "@/actions/comments";

import CommentSVG from "/public/assets/comment.svg";
import styles from "../Photo.module.css";

export default function CommentForm({
  id,
  token,
}: {
  id: number | string;
  token: string;
}) {
  const [state, formAction] = useFormState(postComment, {
    data: null,
    ok: false,
    error: "",
  });

  return (
    <form className={styles.form} action={formAction}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
      />
      <Input type="hidden" name="id" value={id} />
      <Input type="hidden" name="token" value={token} />

      {state.error && (
        <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>
          {state.error}
        </p>
      )}

      <button className={styles.button}>
        <CommentSVG />
      </button>
    </form>
  );
}
