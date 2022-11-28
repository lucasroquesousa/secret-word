// React imports
import React from "react";
// Css Imports
import {
  Container,
  WordContent,
  LetterContent,
  WrongLettersContent,
} from "./styles.module";

const Game = ({ verifiyLetter }) => {
  return (
    <Container>
      <p>
        <span>Pontuação: 0</span>
      </p>
      <h2>Adivinhe a palavra</h2>
      <h3>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <WordContent>
        <span>A</span>
        <span></span>
      </WordContent>
      <LetterContent>
        <p>Tente Advinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
        </form>
        <button>JOGAR!</button>
      </LetterContent>
      <WrongLettersContent>
        <p>Letras já utilizadas</p>
        <span>a,b,</span>
      </WrongLettersContent>
      <button onClick={verifiyLetter}>FINALIZAR JOGO</button>
    </Container>
  );
};

export default Game;
