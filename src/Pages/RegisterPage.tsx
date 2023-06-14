import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const RegisterPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Container>
        <Main>{children}</Main>
      </Container>
    </div>
  );
};

export default RegisterPage;

const Container = styled.div`
  background-color: grey;
  width: 100%;
  height: 100px;
  border-radius: 0px 0px 100px 100px;
  position: relative;
`;

const Main = styled.div``;
