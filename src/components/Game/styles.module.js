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
