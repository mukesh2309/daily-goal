import React, { useState } from "react";
import styles from "./Addgoals.module.css";

function Addgoals(props) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [validate, setValidate] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length == 0 || Description.trim().length == 0) {
      setValidate(true);
      setTimeout(() => {
        setValidate(false);
      }, 1000);
      return;
    }
    setTitle("");
    setDescription("");
    props.data(title, Description);
  };
  const errorStyle = {
    border: "1px solid red",
    background: "#ffe3e3",
    color: "#111",
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        style={validate ? errorStyle : {}}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={validate ? errorStyle : {}}
        cols="30"
        rows="3"
        placeholder="Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        Add
      </button>
    </form>
  );
}

export default Addgoals;
