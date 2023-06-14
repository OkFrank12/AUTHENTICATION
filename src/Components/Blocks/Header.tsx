import Button from "../Static/Button";
import styled from "styled-components";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Logo />
          </Holder>

          <NavsHolder>
            <Navs>Home</Navs>
            <Navs>About</Navs>
            <Navs>Contact</Navs>
            <Navs>Resources</Navs>
          </NavsHolder>
          <Div>
            <Button bg="" clr="white" text="Sign in" w="150px" fs="20px" to="/sign-in"/>
            <Button bg="white" clr="grey" text="Sign up" w="150px" fs="20px" to="/sign-up"/>
          </Div>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  color: white;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Logo = styled(AiOutlineThunderbolt)`
  width: 100%;
  height: 100%;
`;

const NavsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`;

const Navs = styled.div`
  margin: 0 20px;

  :hover {
    cursor: pointer;
    color: lightgray;
  }
`;

const Holder = styled.div`
  width: 50px;
  height: 60px;
  object-fit: cover;
`;

const Div = styled.div`
  display: flex;
`;
