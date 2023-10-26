import React, { useEffect, useState } from "react";
import card from "./GenreCards.module.css";

export default function GenreCards(prop) {
  const [selected, setSelected] = useState(prop.selected);
  
  useEffect(() => {
    console.log(prop.title, selected);
  },[selected]);
  return (
    <div className={card.app} 
    style={{backgroundColor: prop.color}}
    onClick={
      ()=> {setSelected(!selected)}
      }>
      <div className={card.title}>
        <h4>{prop.title}</h4>
      </div>
      <div className={card.image}>
        <img src={prop.image} />
      </div>
    </div>
  );
}
