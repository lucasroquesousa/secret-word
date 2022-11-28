import React from "react";
import { Container } from "./styles.module";
const EndGame = ({ retryGame }) => {
  return (
    <Container>
      <h2>Game Over</h2>
      <button onClick={retryGame}>RESETAR JOGO</button>
    </Container>
  );
};

export default EndGame;
