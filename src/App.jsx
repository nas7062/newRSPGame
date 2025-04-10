import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import style from "./css/App.module.css"
import { choices, RESULT } from "./util/constant";
function App() {
  const [userChoice,setUserChoice] = useState(null);
  const [computerChoice,setComputerChoice] = useState(null);
  const [result,setResult] = useState([null,null]);
  const [userResult,comResult] = result;
  const [isPlaying,setIsPlying] = useState(false);
  const RandomSelect = () => {
    const index =  Math.floor(Math.random()*3);
    return Object.values(choices)[index];
  }
  const determineWinner = (user,computer) => {
    if(user===computer) {
      return [RESULT.DRAW,RESULT.DRAW];
    }
    if((user===choices.SCISSORS && computer === choices.PAPER) 
      || (user===choices.ROCK && computer === choices.SCISSORS) 
    || (user===choices.PAPER && computer === choices.ROCK) ) {
      return [RESULT.WIN,RESULT.LOSE];
    }
    else {
      return[RESULT.LOSE,RESULT.WIN];
    }
  }

  const handleUserChoice = (choice) => {
    if (isPlaying) return;
    setIsPlying(true);
    setUserChoice(choice);
    setTimeout(() => {
      const comChoice = RandomSelect();
      setComputerChoice(comChoice);
      setResult(determineWinner(choice,comChoice));
      setIsPlying(false);
    }, 500);
    
  }

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult([null,null]);
    console.log(userChoice,computerChoice,result)
  }
  return(
    <div>
      <header>
        <h1>가위바위보 게임</h1>
      </header>
      <main >
      <Card name="너님" choice={userChoice} result={userResult}  />
      <div className={style.btnList}>
        {Object.values(choices).map((choice)=>(
          <Button choice={choice} disabled ={isPlaying} onclick={()=> handleUserChoice(choice)} />
        ))}
        <button>{userResult ? userResult : "?"}</button>
        {isPlaying ? "" :<button type="button" onClick={resetGame}>다시하기</button>}
      </div>
      <Card name="상대선수" choice={computerChoice} result={comResult} />
      </main>
      <footer>
        <p>버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.
          <br/>
          컴퓨터는 랜덤으로 선택합니다.
        </p>
      </footer>
    </div>
  );
}

export default App;
