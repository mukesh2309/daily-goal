import React from "react";
import style from "./Showgoals.module.css";

function Showgoals({ title, description, dlt, id }) {
  return (
    <div className={style.list}>
      <div>
        <h4 className={style.title}>{title}</h4>
        <p>{description}</p>
      </div>
      <button className={style.btn} onClick={() => dlt(id)}>
        Delete
      </button>
    </div>
  );
}

export default Showgoals;
