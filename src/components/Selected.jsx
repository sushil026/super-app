import React from "react";
import sel from "./Selected.module.css";

export default function Selected(prop) {
  return (
    <div className={sel.body}>
      <p>{prop.title}</p>
      <span className="material-symbols-outlined">close</span>
    </div>
  );
}
