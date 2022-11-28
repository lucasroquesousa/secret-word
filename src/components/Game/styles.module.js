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
  width: 100%;
  span {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: white;
  }
`;
export const LetterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  padding: 15px;
  p {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: yellow;
  }
  h3 {
    font-size: 30px;
    text-shadow: 1px 2px 2px black;
    color: white;
  }
  input {
    width: 70px;
    height: 70px;
    border: 5px solid yellow;
    border-radius: 10px;
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
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
