"use client";

import React, { useRef } from "react";
import { useFormState } from "react-dom";

import Input from "@/components/Input";
import { postComment } from "@/actions/comments";

import CommentSVG from "/public/assets/comment.svg";
import styles from "../Photo.module.css";

export default function CommentForm({ id }: { id: number | string }) {
  const [state, formAction] = useFormState(postComment, {
    data: null,
    ok: false,
    error: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      className={styles.form}
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
      }}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
      />
      <Input type="hidden" name="id" value={id} />

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
