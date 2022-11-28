import React from "react";
import { Container } from "./styles.modules";
const StartScreen = ({ startGame }) => {
  return (
    <Container>
      <h2>Clique no botão abaixo para começar a jogar</h2>
      <button onClick={startGame}>COMEÇAR O JOGO</button>
    </Container>
  );
};

export default StartScreen;
