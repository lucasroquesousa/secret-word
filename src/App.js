import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { GlobalStyle } from "./Styles/GlobalStyle";

// import data
import { wordList } from "../src/data/data";
import { useEffect, useState } from "react";
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

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

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
    return { word, category };
  };

  const startGame = () => {
    // pickWord e PickCategory function
    const { word, category } = pickWordAndPickCategory();

    // criar um array com as letras separadas
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letras) => letras.toLowerCase());

    console.log(wordLetters);
    console.log(word, category);

    // setar os estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stage[1].name);
  };

  // processo de entrada de letras
  const verifiyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessLetters) => [
        ...actualGuessLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      //reset todos os stages
      clearLetterStates();

      setGameStage(stage[2].name);
    }
  }, [guesses]);

  //checando condições de vitoria

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
  }, [guessedLetters]);

  // reiniciar o jogo
  const retryGame = () => {
    setScore(0);
    setGuesses(5);
    setGameStage(stage[0].name);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifiyLetter={verifiyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <EndGame retryGame={retryGame} score={score} />}
    </>
  );
}

export default App;
