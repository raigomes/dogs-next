import React from "react";

import CommentSVG from "/public/assets/comment.svg";

import { IComment } from "@/types/global";
import styles from "../Photo.module.css";

export default function Comments({ comments }: { comments: IComment[] }) {
  const loggedIn = true;

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
      {loggedIn && (
        <form className={styles.form}>
          <textarea
            className={styles.textarea}
            id="comment"
            name="comment"
            placeholder="Comente..."
            // value={textComment}
            // onChange={(e) => setTextComment(e.target.value)}
          />
          <button className={styles.button}>
            <CommentSVG />
          </button>
          {/* {message} */}
        </form>
      )}
    </>
  );
}
