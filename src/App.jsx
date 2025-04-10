import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import style from "./css/App.module.css";
function App() {
  const rsp = ["가위", "바위", "보"];
  const [userChoice, setUserChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [comStatus, setComStatus] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const generateComputerChoice = () => {
    return Math.floor(Math.random() * 3 + 1);
  };

  const resultChange = () => {
    if (userChoice === comChoice) {
      setResult("비겼다");
      setUserStatus("draw");
      setComStatus("draw");
      setIsPlaying(true);
    } else if (
      (userChoice === 1 && comChoice === 3) ||
      (userChoice === 2 && comChoice === 1) ||
      (userChoice === 3 && comChoice === 2)
    ) {
      setResult("이겼다");
      setUserStatus("win");
      setComStatus("lose");
      setIsPlaying(false);
    } else {
      setResult("졌다");
      setUserStatus("lose");
      setComStatus("win");
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    if (userChoice) {
      const choice = generateComputerChoice();
      setComChoice(choice);
    }
  }, [userChoice]);
  const resetGame = () => {
    setUserChoice(null);
    setComChoice(null);
    setIsPlaying(true);
    setResult("?");
  };

  useEffect(() => {
    if (userChoice || comChoice) {
      resultChange();
    }
  }, [comChoice, userChoice]);
  return (
    <div className={style.container}>
      <h1>가위바위보 게임</h1>
      <div className={style.box}>
        <Card
          userChoice={userChoice}
          name={rsp[userChoice - 1]}
          isUser={true}
          result={result}
          status={userStatus}
          isPlaying={isPlaying}
        />
        <div className={style.btnList}>
          {rsp.map((item, idx) => (
            <Button
              name={item}
              key={idx}
              setUserChoice={setUserChoice}
              isPlaying={isPlaying}
            />
          ))}
          <button
            style={
              isPlaying
                ? { backgroundColor: "wheat" }
                : { backgroundColor: "red" }
            }
          >
            {result ? result : "?"}
          </button>
          {isPlaying ? "" : <button onClick={resetGame}>다시하기</button>}
        </div>
        <Card
          comChoice={comChoice}
          name={rsp[comChoice - 1]}
          isUser={false}
          result={result}
          status={comStatus}
          isPlaying={isPlaying}
        />
      </div>
      {!isPlaying ? (
        ""
      ) : (
        <>
          <p>버튼을 클릭하여 가위,바위,보 중 하나를 선택하세요.</p>
          <p>컴퓨터는 랜덤으로 선택합니다.</p>
        </>
      )}
    </div>
  );
}

export default App;
