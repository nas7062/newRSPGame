import React from "react";
import style from "../css/Card.module.css";
import { choiceImgs, RESULT } from "../util/constant";

const Card = ({name,choice,result}) => {

  const imageUrl = choice ? choiceImgs[choice] : choiceImgs["처음"];
  
  const isWin = result === RESULT.WIN;
  const resultClass = isWin ? style.win : style.lose;

  return(
    <div className={`${style.container} ${resultClass} `} >
      <h2>{name}</h2>
      <img src={imageUrl} alt="" />
      <p>{result || "선택하세요"}</p>
    </div>
  );
}

export default Card;
