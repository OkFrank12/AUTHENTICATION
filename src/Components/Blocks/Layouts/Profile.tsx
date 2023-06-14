import { CiTempHigh } from "react-icons/ci";
import { AiOutlineCloud } from "react-icons/ai";
import styled from "styled-components";
import { BiRun } from "react-icons/bi";

const Profile = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <DivTitle>Hello, Scarlett!</DivTitle>
            <DivText>
              Welcome Home! The air quality is good and fresh...You can go out
              today
            </DivText>
            <DivTemp>
              <TempSign />
              <TempData>+ 25 degree celsius Outdoor Temperature</TempData>
            </DivTemp>
            <DivTemp2>
              <DivWeather />
              <TempData2>Fuzzy Cloudy Weather</TempData2>
            </DivTemp2>
          </Div>
          <DivImg>
            <Img />
          </DivImg>
        </Main>
      </Container>
    </div>
  );
};

export default Profile;

const Container = styled.div`
  width: 600px;
  height: 200px;
  background-color: #f540f5;
  margin-left: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  height: 90%;
`;

const DivTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: gold;
`;

const DivText = styled.div`
  width: 300px;
`;

const DivTemp = styled.div`
  display: flex;
`;

const DivWeather = styled(AiOutlineCloud)`
  font-size: 16px;
`;

const TempSign = styled(CiTempHigh)`
  font-size: 20px;
`;

const TempData = styled.div``;

const Div = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

const DivTemp2 = styled.div`
  display: flex;
`;

const TempData2 = styled.div`
  margin-left: 5px;
`;

const DivImg = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(BiRun)`
  width: 100%;
  height: 100%;
`;
