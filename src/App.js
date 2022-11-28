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
  // iniciando o jogo na tela startScreen
  const [gameStage, setGameStage] = useState(stage[0].name);

  // lista de palavras do jogo
  const [words] = useState(wordList);

  // selecionando as palavras
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // start game do jogo
  const pickWordAndPickCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);
  };

  const startGame = () => {
    // pickWord e PickCategory function
    pickWordAndPickCategory();
    setGameStage(stage[1].name);
  };

  // processo de entrada de letras
  const verifiyLetter = () => {
    setGameStage(stage[2].name);
  };

  // reiniciar o jogo
  const retryGame = () => {
    setGameStage(stage[0].name);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifiyLetter={verifiyLetter} />}
      {gameStage === "end" && <EndGame retryGame={retryGame} />}
    </>
  );
}

export default App;
