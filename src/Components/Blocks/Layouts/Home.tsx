import { Outlet } from "react-router-dom";
import styled from "styled-components";
import RightSider from "./RightSider";
import Chart from "./Chart";
import Profile from "./Profile";

const Home = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Div1>
              <Profile />
              <Chart />
            </Div1>
            <RightSider />
          </Div>

          <Outlet />
        </Main>
      </Container>
    </div>
  );
};

export default Home;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  position: absolute;
  top: 90px;
  left: 3%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
