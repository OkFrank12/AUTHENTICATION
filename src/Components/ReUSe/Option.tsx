import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface iOps {
  title?: string;
  to?: string;
}

const Option: React.FC<iOps> = ({ title , to }) => {
  return (
    <div>
      <Container to={`${to}`}>
        <Main>
          <LeftOps>{title}</LeftOps>
        </Main>
      </Container>
    </div>
  );
};

export default Option;

const Container = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
`;

const LeftOps = styled.div`
  font-size: 13px;
  color: black;

  :hover {
    text-decoration-line: underline;
    cursor: pointer;
    color: lightgray;
  }
`;
