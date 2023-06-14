import styled from 'styled-components'
import {useContext} from "react"
import InBuiltProps from '../Components/ReUSe/InBuiltProps'
import Option from '../Components/ReUSe/Option'
import Button from '../Components/Static/Button'
import { GlobalContext } from '../Global/GlobalRovider'
import Forgot from '../Components/ReUSe/Forgot'


const SignUp = () => {
  const {actualEmail, actualName, actualPhone, actualPassword} = useContext(GlobalContext)
  return (
    <div>
      <CardHold>
        <Header>Sign Up</Header>

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
          <Option title="Already have an account?" to='/sign-in'/>
          <Forgot title="Forgot Password" to="/reset"/>
          <Button w="120px" bg="grey" clr="white" text="Sign up" fs="12px" to="/sign-in" onClick={() => {
            console.log("Name: ", actualName)
            console.log("Email: ", actualEmail)
            console.log("Phone No.: ", actualPhone)
            console.log("Password: ", actualPassword)
          }}/>
        </Div>
      </CardHold>
    </div>
  )
}

export default SignUp

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
  width: 330px;
`;
