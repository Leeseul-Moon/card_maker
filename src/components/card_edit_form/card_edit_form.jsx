import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, delCard, updateCard }) => {
  const { id, name, company, job, email, memo, photo, photoURL, theme } = card;

  // const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const memoRef = useRef();
  const themeRef = useRef();

  const onSubmit = () => {
    delCard(id);
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      photo: file.name,
      photoURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          text="text"
          name="name"
          value={name}
          ref={nameRef}
          onChange={onChange}
        />
        <input
          className={styles.input}
          text="text"
          name="company"
          value={company}
          ref={companyRef}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name="theme"
          value={theme}
          ref={themeRef}
          onChange={onChange}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <input
          className={styles.input}
          text="text"
          name="job"
          value={job}
          ref={jobRef}
          onChange={onChange}
        />
        <input
          className={styles.input}
          text="text"
          name="email"
          value={email}
          ref={emailRef}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          name="memo"
          value={memo}
          ref={memoRef}
          onChange={onChange}
        ></textarea>
        <FileInput name={photo} onFileChange={onFileChange} />
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </>
  );
};

export default CardEditForm;
