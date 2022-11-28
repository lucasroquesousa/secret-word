import React from "react";
import { Container } from "./styles.module";
import logo from "../../assets/img/Secret_Word-removebg-preview.png";
const Header = () => {
  return (
    <Container>
      <img className="teste" src={logo} alt="" />
    </Container>
  );
};

export default Header;
