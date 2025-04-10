import React from "react";
import style from "../css/Button.module.css";
import { choiceImgs, choices } from "../util/constant";

const classNames = {
  [choices.PAPER]: "paper",
  [choices.ROCK]: "rock",
  [choices.SCISSORS]: "scissors",
};
const Button = ({choice,onclick ,disabled})=> {
  const className = classNames[choice];
  const ImageUrl = choiceImgs[choice] ;
  return(
    <button type="button" className={`${style.btn} ${style[className]} ${disabled && style.disabled}`} 
    onClick={onclick} 
    disabled={disabled}>
      <img src={ImageUrl} alt="" />
      <p>{choice}</p>
    </button>
  );
};

export default Button;
