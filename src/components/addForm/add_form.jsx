import React, { useRef, useState } from "react";
import styles from "./add_form.module.css";
import Button from "../button/button";

const AddForm = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const memoRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState({ photo: null, photoURL: null });

  const onFileChange = (file) => {
    console.log("file > ", file);
    setFile({
      photo: file.name,
      photoURL: file.url,
    });
  };
  const add = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      memo: memoRef.current.value || "",
      theme: themeRef.current.value,
      photo: file.photo || "",
      photoURL: file.photoURL || "",
    };
    formRef.current.reset();
    setFile({ photo: null, photoURL: null });
    addCard(card);
  };

  return (
    <>
      <form ref={formRef} className={styles.form}>
        <input
          className={styles.input}
          text="text"
          name="name"
          ref={nameRef}
          placeholder="name"
        />
        <input
          className={styles.input}
          text="text"
          name="company"
          ref={companyRef}
          placeholder="company"
        />
        <select className={styles.select} name="theme" ref={themeRef}>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <input
          className={styles.input}
          text="text"
          name="job"
          ref={jobRef}
          placeholder="job"
        />
        <input
          className={styles.input}
          text="text"
          name="email"
          ref={emailRef}
          placeholder="email"
        />
        <textarea
          className={styles.textarea}
          name="memo"
          ref={memoRef}
          placeholder="memo"
        ></textarea>
        <div className={styles.fileInput}>
          <FileInput name={file.photo} onFileChange={onFileChange} />
        </div>
        <Button name="???? Add" onClick={add} />
      </form>
    </>
  );
};

export default AddForm;
