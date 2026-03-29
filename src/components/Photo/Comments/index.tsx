import React from "react";

import CommentSVG from "/public/assets/comment.svg";

import styles from "../Photo.module.css";

export default function Comments() {
  const comments = [
    {
      comment_ID: 1,
      comment_author: "Fulano",
      comment_content: "Comentario 1",
    },
    {
      comment_ID: 2,
      comment_author: "Fulano",
      comment_content: "Comentario 2",
    },
    {
      comment_ID: 3,
      comment_author: "Fulano",
      comment_content: "Comentario 3",
    },
  ];

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
