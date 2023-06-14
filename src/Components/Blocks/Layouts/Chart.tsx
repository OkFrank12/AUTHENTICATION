import styled from "styled-components";

const Chart = () => {
  const data: any = [
    { name: "Jan", value1: 100, value2: 80 },
    { name: "Feb", value1: 70, value2: 60 },
    { name: "Mar", value1: 90, value2: 90 },
    { name: "Apr", value1: 40, value2: 70 },
    { name: "May", value1: 70, value2: 50 },
    { name: "Jun", value1: 100, value2: 80 },
    { name: "Jul", value1: 70, value2: 60 },
    { name: "Aug", value1: 90, value2: 90 },
    { name: "Sep", value1: 40, value2: 70 },
    { name: "Oct", value1: 70, value2: 50 },
    { name: "Nov", value1: 40, value2: 70 },
    { name: "Dec", value1: 70, value2: 50 },
  ];

  // const newData: any = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div>
      <Container>
        {/* <NumbHold>
          <Numb1>1</Numb1>
          <Line />
        </NumbHold>
        <NumbHold2>
          <Numb1>2</Numb1>
          <Line />
        </NumbHold2>
        <NumbHold3>
          <Numb1>3</Numb1>
          <Line />
        </NumbHold3>
        <NumbHold4>
          <Numb1>4</Numb1>
          <Line />
        </NumbHold4>
        <NumbHold5>
          <Numb1>5</Numb1>
          <Line />
        </NumbHold5>
        <NumbHold6>
          <Numb1>6</Numb1>
          <Line />
        </NumbHold6>
        <NumbHold7>
          <Numb1>7</Numb1>
          <Line />
        </NumbHold7> */}

        {data.map((props: any) => (
          <BarHolder>
            {" "}
            <Div style={{ display: "flex", height: "100%" }}>
              <ChartHold>
                <Bar>
                  <SubBar
                    bg="silver"
                    w={`${(props.value2 / 100) * 100}%`}
                  />
                </Bar>
              </ChartHold>
              <ChartHold>
                <Bar>
                  <SubBar bg="#f540f5" w={`${(props.value1 / 100) * 100}%`} />
                </Bar>
              </ChartHold>
            </Div>
            <Title>{props?.name}</Title>
          </BarHolder>
        ))}
      </Container>
    </div>
  );
};

export default Chart;

const Container = styled.div`
  width: 590px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #f540f5;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 30px;
  padding: 5px;
  display: flex;
`;

const BarHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin: 0 5px;
`;

const Bar = styled.div`
  height: 90%;
  width: 5px;
  border-radius: 10px 10px 0px 0px;
  position: relative;
  margin: 7px;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const SubBar = styled.div<{
  bg: string;
  w: string;
}>`
  background-color: ${({ bg }) => bg};
  height: ${({ w }) => w};
  width: 5px;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  bottom: -20px;
  right: 0;
`;

const ChartHold = styled.div``;

const Div = styled.div``;

// const NumbHold = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   bottom: -140px;
//   width: 590px;
// `;

// const Numb1 = styled.div`
//   font-size: 10px;
//   font-weight: 900;
// `;

// const Line = styled.div`
//   width: 550px;
//   height: 1px;
//   background-color: #898989;
//   position: absolute;
//   left: 10px;
// `;

// const NumbHold2 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 80px; */
//   width: 590px;
// `;

// const NumbHold3 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 120px; */
//   width: 590px;
// `;

// const NumbHold4 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 160px; */
//   width: 590px;
// `;

// const NumbHold5 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 200px; */
//   width: 590px;
// `;

// const NumbHold6 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 240px; */
//   width: 590px;
// `;

// const NumbHold7 = styled.div`
//   display: flex;
//   /* position: absolute; */
//   align-items: center;
//   /* bottom: 280px; */
//   width: 590px;
// `;
