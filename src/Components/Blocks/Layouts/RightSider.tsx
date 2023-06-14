import styled from "styled-components";
import toon1 from "../../../Assets/Assets/toon1.webp"
import toon2 from "../../../Assets/Assets/toon2.jpg"
import toon3 from "../../../Assets/Assets/toon3.png"
import toon4 from "../../../Assets/Assets/toon4.jpg"
import toon5 from "../../../Assets/Assets/toon5.jpg"
import toon6 from "../../../Assets/Assets/toon6.jpg"
import toon7 from "../../../Assets/Assets/toon7.jpg"
import toon8 from "../../../Assets/Assets/toon8.png"
import toon9 from "../../../Assets/Assets/toon9.png"
import toon10 from "../../../Assets/Assets/toon10.jpg"

const RightSider = () => {
  const data: any = [
    {
      text: "This Month Revenue",
      cash: "$15,200",
      percentage: "+12.6%",
      bg: "#f540f5",
      color: "#f540f5",
    },
    {
      text: "Today Earning",
      cash: "$11,000",
      percentage: "+11.6%",
      bg: "lightgray",
      color: "lightgray",
    },
    {
      text: "Today Orders",
      cash: "$17,250",
      percentage: "+17.3%",
      bg: "purple",
      color: "purple",
    },
    {
      text: "Products Sold",
      cash: "$35,000",
      percentage: "+21.6%",
      bg: "grey",
      color: "grey",
    },
  ];

  const newData: any = [
    { images: toon1, bold: "Scarlett", light: "Admin" },
    { images: toon2, bold: "Nariya", light: "Full Access" },
    { images: toon3, bold: "Danjuma", light: "Dev Ops" },
    { images: toon4, bold: "Cynthia", light: "Softwares" },
    { images: toon5, bold: "Dariya", light: "Projects" },
    { images: toon6, bold: "Osazileri", light: "Testers" },
    { images: toon7, bold: "Bones", light: "Frontend" },
    { images: toon8, bold: "Diana", light: "Backend" },
    { images: toon9, bold: "Chichi", light: "Compiler" },
    { images: toon10, bold: "Adora", light: "Cyber Eng." },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            {data.map((props: any) => {
              return (
                <ParentDiv bg={props.bg}>
                  <Div>
                    <Text>{props.text}</Text>
                    <Cash>{props.cash}</Cash>
                    <SmallDiv color={props.color}>
                      <SubText>{props.percentage}</SubText>
                    </SmallDiv>
                  </Div>
                </ParentDiv>
              );
            })}
          </Holder>
          <NewHolder>
            {" "}
            <SubHolder>
              {newData.map((props: any) => {
                return (
                  <Safe>
                    <Circle>
                      <Img src={props.images} />
                    </Circle>
                    <Bold>{props.bold}</Bold>
                    <Light>{props.light}</Light>
                  </Safe>
                );
              })}
            </SubHolder>
          </NewHolder>
        </Main>
      </Container>
    </div>
  );
};

export default RightSider;

const Container = styled.div`
  width: 600px;
  height: 100%;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 590px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 30px;
`;

const SubText = styled.div``;

const ParentDiv = styled.div<{
  bg: string;
}>`
  width: 250px;
  height: 120px;
  background-color: ${({ bg }) => bg};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Cash = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const SmallDiv = styled.div<{
  color: string;
}>`
  width: 50px;
  height: 25px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${({ color }) => color};
  font-weight: 500;
`;

const Holder = styled.div`
  width: 86%;
  height: 255px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 80%;
`;

const NewHolder = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bold = styled.div`
  font-weight: 700;
  color: #f540f5;
`;

const Light = styled.div`
  font-size: 12px;
`;

const SubHolder = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid silver;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const Safe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 15px;
`;
