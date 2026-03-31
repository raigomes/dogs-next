import React from "react";
import { cookies } from "next/headers";

import { validateToken } from "@/actions/auth";
import { IComment } from "@/types/global";

import CommentForm from "./CommentForm";
import styles from "../Photo.module.css";

export default async function Comments({
  comments,
  id,
}: {
  comments: IComment[];
  id: number | string;
}) {
  const token = cookies().get("token")?.value ?? "";
  const loggedIn = await validateToken(token);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {loggedIn && <CommentForm id={id} token={token} />}
    </>
  );
}
