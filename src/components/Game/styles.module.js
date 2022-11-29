import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  h2 {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: yellow;
  }
  h3 {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: white;
  }
  .pointSpan {
    font-weight: bold;
  }
  .tip span {
    color: yellow;
  }
  p {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: yellow;
  }
  button {
    width: 250px;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background-color: blue;
    border-radius: 10px;
    border: 3px solid white;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.24);
      background-color: blueviolet;
      color: yellowgreen;
    }
  }
`;

export const WordContent = styled.div`
  margin: 1.5rem;
  width: 500px;
  padding: 1.5rem;
  border: 20px solid yellow;
  display: flex;

  .letter,
  .blankSquare {
    text-align: center;
    font-size: 70px;
    line-height: 1.5;
    border: 3px solid black;
    height: 100px;
    width: 100px;
    text-transform: uppercase;
    background-color: #ffff;
    color: #000;
    font-weight: bold;
  }
`;
export const LetterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .letterContent p {
    margin-bottom: 1.2rem;
  }
  .formContent form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    height: 50px;
    width: 50px;
    font-size: 2em;
    text-align: center;
  }
`;

export const WrongLettersContent = styled.div`
  p {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: yellow;
  }
  span {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: white;
  }
`;
