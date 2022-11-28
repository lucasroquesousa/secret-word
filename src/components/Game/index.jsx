// React imports
import React from "react";
// Css Imports
import { Container } from "./styles.module";

const Game = ({ verifiyLetter }) => {
  return (
    <Container>
      <h2>Game</h2>
      <button onClick={verifiyLetter}>FINALIZAR JOGO</button>
    </Container>
  );
};

export default Game;
