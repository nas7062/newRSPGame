import React from "react";
import style from "../css/Card.module.css";
import paperImage from "../assets/paper.png";
import scissorsImage from "../assets/scissors.png";
import rockImage from "../assets/rock.png";
import questionImage from "../assets/questionmark.png";
const Card = ({
  userChoice,
  name,
  comChoice,
  result,
  isUser,
  status,
  isPlaying,
}) => {
  let imageUrl;
  if (isUser) {
    if (userChoice === 1) {
      imageUrl = scissorsImage;
    } else if (userChoice === 2) {
      imageUrl = rockImage;
    } else {
      imageUrl = paperImage;
    }
  }
  console.log(result);
  if (!isUser) {
    if (comChoice === 1) {
      imageUrl = scissorsImage;
    } else if (comChoice === 2) {
      imageUrl = rockImage;
    } else {
      imageUrl = paperImage;
    }
  }
  const isWinner =
    (isUser && result === "이겼다") || (!isUser && result === "졌다");
  return (
    <div
      className={style.container}
      style={
        isWinner
          ? { backgroundColor: "green   " }
          : { opacity: 0.5, backgroundColor: "gray" }
      }
    >
      <h2>{isUser ? "너님" : "상대선수"}</h2>
      <img src={imageUrl ? imageUrl : questionImage} alt="sad" />
      {isPlaying ? (
        <p>{name ? name : "선택하세요"}</p>
      ) : (
        <p>{status === "win" ? "이겼다" : status === "lose" ? "졌다" : ""}</p>
      )}
    </div>
  );
};

export default Card;
