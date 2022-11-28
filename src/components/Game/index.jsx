// React imports
import React from "react";
// Css Imports
import {
  Container,
  WordContent,
  LetterContent,
  WrongLettersContent,
} from "./styles.module";

const Game = ({
  verifiyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  return (
    <Container>
      <p>
        <span className="pointSpan">Pontuação: {score}</span>
      </p>
      <h2>Adivinhe a palavra</h2>
      <h3>
        Dica sobre a palavra:
        <span className=".tip span"> {pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guesses} tentativas</p>
      <WordContent>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span className="blankSquare" key={i}></span>
          )
        )}
      </WordContent>
      <LetterContent>
        <p className="letterContent">Tente Advinhar uma letra da palavra: </p>

        <form className="formContent">
          <input
            className="inputContent"
            type="text"
            name="letter"
            maxLength="1"
            required
          />
        </form>
        <button>JOGAR!</button>
      </LetterContent>
      <WrongLettersContent>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </WrongLettersContent>
      <button onClick={verifiyLetter}>FINALIZAR JOGO</button>
    </Container>
  );
};

export default Game;
