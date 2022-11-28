import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { GlobalStyle } from "./Styles/GlobalStyle";

// import data
import { wordList } from "../src/data/data";
import { useState } from "react";
import Game from "./components/Game";
import EndGame from "./components/End";

const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name);

  const [words] = useState(wordList);
  console.log(words);

  return (
    <>
      <GlobalStyle />
      <Header />
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <EndGame />}
    </>
  );
}

export default App;
