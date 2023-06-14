import React from "react";
import styled from "styled-components";
import { iBtn } from "../../Utils/Interface";
import { NavLink } from "react-router-dom";

const Button: React.FC<iBtn> = ({w, clr, bg, text, fs, to, onClick}) => {
  return (
    <div>
      <Container bg={`${bg}`} clr={`${clr}`} w={`${w}`} fs={`${fs}`} to={`${to}`} onClick={onClick}>
        <Main>{text}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Container = styled(NavLink)<{
    w: string;
    bg: string;
    clr: string;
    fs: string;
}>`
  width: ${({w}) => w};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({bg}) => bg};
  color: ${({clr}) => clr};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: ${({fs}) => fs};
  font-weight: 700;
  transition: all 300ms;

  :hover {
    transform: translate(0, -3px);
    cursor: pointer;
  }
`;

const Main = styled.div``;
