import { iCard } from "../../Utils/Interface";
import Button from "../Static/Button";
import InBuiltProps from "./InBuiltProps";
import Option from "./Option";
import styled from "styled-components";

const Card: React.FC<iCard> = ({ text }) => {
  return (
    <div>
      <CardHold>
        <Header>{text}</Header>

        <InBuiltProps 
        name 
        name1="Name" 
        namePlace="Enter your UserName: " />

        <InBuiltProps
          email
          email1="Email"
          emailPlace="Enter your Email Address: "
        />

        <InBuiltProps
          phone
          phone1="Phone"
          phonePlace="Enter your Phone Number: "
        />

        <InBuiltProps
          password
          password1="Password"
          passwordPlace=" Your Password: "
        />

        <Div>
          <Option title="Already have an account?" />
          <Button w="120px" bg="grey" clr="white" text="Sign up" fs="12px" to="/sign-up"/>
        </Div>
      </CardHold>
    </div>
  );
};

export default Card;

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
  font-size: 18px;
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;
