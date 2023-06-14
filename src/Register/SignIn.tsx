import React, {useContext} from "react";
import styled from "styled-components";
import InBuiltProps from "../Components/ReUSe/InBuiltProps";
import Option from "../Components/ReUSe/Option";
import { iCard } from "../Utils/Interface";
import Button from "../Components/Static/Button";
import { GlobalContext } from "../Global/GlobalRovider";
import Forgot from "../Components/ReUSe/Forgot";

const SignIn: React.FC<iCard> = () => {
  const {actualEmail, actualPassword} = useContext(GlobalContext)
  return (
    <div>
      <CardHold>
        <Header>Sign in</Header>

        <InBuiltProps
          email
          email1="Email"
          emailPlace="Enter your Email Address: "
        />

        <InBuiltProps
          password
          password1="Password"
          passwordPlace=" Your Password: "
        />
        <Div>
          <Option title="Don't have an account?" to="/sign-up"/>
          <Forgot title="Forgot Password" to="/reset"/>
          <Button w="120px" bg="grey" clr="white" text="Sign in" fs="12px" to="/welcome" onClick={() => {
            console.log("Email: ", actualEmail)
            console.log("Password: ", actualPassword)
          }}/>
        </Div>
      </CardHold>
    </div>
  );
};

export default SignIn;

const CardHold = styled.div`
  position: absolute;
  width: 370px;
  min-height: 200px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 5px 0;
  top: 100px;
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
  flex-direction: row;
  width: 330px;
  height: 40px;
`;
