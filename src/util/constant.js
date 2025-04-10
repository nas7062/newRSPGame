import paperImg from "../assets/paper.png";
import rockImg from "../assets/rock.png";
import scissorsImg from "../assets/scissors.png";
import questionImg from "../assets/questionmark.png"; // <- 물음표 이미지 (customMarkImg)

const choices = {
  SCISSORS: "가위",
  ROCK: "바위",
  PAPER: "보",
};

const choiceImgs = {  
  가위: scissorsImg,
  바위: rockImg,
  보: paperImg,
  처음: questionImg, 
};

const RESULT = {
  WIN: "이겼다",
  LOSE: "졌다",
  DRAW: "비겼다",
  UNKNOWN: "?", // 초기 상태나 알 수 없음일 때 사용 가능
};

export { choiceImgs, choices, RESULT };