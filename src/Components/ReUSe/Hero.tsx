import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <AttachToHead></AttachToHead>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

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
