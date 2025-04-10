import React from "react";
import style from "../css/Button.module.css";
import paperImage from "../assets/paper.png";
import scissorsImage from "../assets/scissors.png";
import rockImage from "../assets/rock.png";
const Button = ({ name, setUserChoice, isPlaying }) => {
  let imageUrl;
  let num = 0;
  if (name === "보") {
    imageUrl = paperImage;
    num = 3;
  } else if (name === "가위") {
    imageUrl = scissorsImage;
    num = 1;
  } else {
    imageUrl = rockImage;
    num = 2;
  }
  const ClickRsp = (num) => {
    if (isPlaying) setUserChoice(num);
  };
  return (
    <div className={style.btn} onClick={() => ClickRsp(num)}>
      <img src={imageUrl} alt="sad" />
      <p>{name}</p>
    </div>
  );
};

export default Button;
