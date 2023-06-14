import { AiOutlineThunderbolt } from "react-icons/ai";
import styled from "styled-components";
import Button from "../../Static/Button";

const Intro = () => {
  return (
    <div>
      <Container>
        <Main>
          <AttachToHead></AttachToHead>
          <CardHold>
        <Header>
          Welcome To <Icon />
          <Button
            w="120px"
            clr="white"
            text="Click Here"
            fs="20px"
            to="/home"
            onClick={() => {

            }}
            bg="lightgray"
          />
        </Header>
      </CardHold>
          </Main>
      </Container>
    </div>
  );
};

export default Intro;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

const AttachToHead = styled.div``;


const CardHold = styled.div`
  position: absolute;
  width: 370px;
  min-height: 250px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 5px 0;
  right: 500px;
`;

const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Icon = styled(AiOutlineThunderbolt)`
margin: 10px 0`;
