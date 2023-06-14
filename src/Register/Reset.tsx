import React, {useContext} from 'react'
import styled from 'styled-components';
import InBuiltProps from '../Components/ReUSe/InBuiltProps';
import Option from '../Components/ReUSe/Option';
import Button from '../Components/Static/Button';
import { iProps } from '../Utils/Interface';
import { GlobalContext } from '../Global/GlobalRovider';

const Reset: React.FC<iProps> = () => {
  const {actualConfirm, actualPassword} = useContext(GlobalContext)
  return (
    <div>
      <CardHold>
        <Header>Reset Password</Header>

        <InBuiltProps
          password
          password1="Password"
          passwordPlace=" Your New Password: "
        />

        <InBuiltProps
          confirm
          confirm1="Confirm New Password"
          confirmPlace="Confirm Password: "
        />

        <Div>
          <Button w="120px" bg="grey" clr="white" text="Reset" fs="12px" to='/sign-in' onClick={() => {
              console.log("Password: ", actualPassword)
              console.log("Confirm: ", actualConfirm)
          }}/>
          <Br/>
          <Option title="Remembered password?" to='/sign-in'/>
        </Div>
      </CardHold>
          </div>
  )
}

export default Reset

const CardHold = styled.div`
  position: absolute;
  width: 370px;
  min-height: 300px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 5px 0;
  right: 500px;
  top: 100px;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 330px;
  height: 40px;
`;

const Br = styled.div`
margin: 5px 0`;