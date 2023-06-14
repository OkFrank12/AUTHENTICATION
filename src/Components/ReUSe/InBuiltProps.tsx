import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalRovider";

const InBuiltProps: React.FC<any> = ({
  name,
  phone,
  email,
  password,
  name1,
  namePlace,
  email1,
  emailPlace,
  password1,
  passwordPlace,
  phone1,
  phonePlace,
  confirm,
  confirm1, 
  confirmPlace
}) => {
  // const [name, setName] = useState<boolean>(false);
  // const [email, setEmail] = useState<boolean>(false);
  // const [phone, setPhone] = useState<boolean>(false);
  // const [password, setPassword] = useState<boolean>(false);

  // console.log(setEmail)
  // console.log(setName)
  // console.log(setPhone)
  // console.log(setPassword)

  const {
    actualName,
    setActualName,
    actualEmail,
    setActualEmail,
    actualPassword,
    setActualPassword,
    actualPhone,
    setActualPhone,
    actualConfirm,
    setActualConfirm
  } = useContext(GlobalContext);

  return (
    <div>
      <Container>
        <Main>
          {name ? (
            <InputHolder>
              <Text>{name1}</Text>
              <Input
                placeholder={`${namePlace}`}
                value={actualName}
                onChange={(e: any) => {
                  setActualName(e.target.value);
                }}
              />
            </InputHolder>
          ) : null}

          {email ? (
            <InputHolder>
              <Text>{email1}</Text>
              <Input
                placeholder={`${emailPlace}`}
                value={actualEmail}
                onChange={(e: any) => {
                  setActualEmail(e.target.value);
                }}
              />
            </InputHolder>
          ) : null}

          {phone ? (
            <InputHolder>
              <Text>{phone1}</Text>
              <Input
                placeholder={`${phonePlace}`}
                value={actualPhone}
                onChange={(e: any) => {
                  setActualPhone(e.target.value);
                }}
              />
            </InputHolder>
          ) : null}

          {password ? (
            <InputHolder>
              <Text>{password1}</Text>
              <Input
                placeholder={`${passwordPlace}`}
                value={actualPassword}
                onChange={(e: any) => {
                  setActualPassword(e.target.value);
                }}
              />
            </InputHolder>
          ) : null}

          {confirm ? (
            <InputHolder>
              <Text>{confirm1}</Text>
              <Input
                placeholder={`${confirmPlace}`}
                value={actualConfirm}
                onChange={(e: any) => {
                  setActualConfirm(e.target.value);
                }}
              />
            </InputHolder>
          ) : null}
        </Main>
      </Container>
    </div>
  );
};

export default InBuiltProps;

const Container = styled.div``;

const Main = styled.div``;

const InputHolder = styled.div`
  width: 320px;
  height: 40px;
  padding: 5px;
  border: 2px solid grey;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 15px 0;
`;

const Text = styled.div`
  position: absolute;
  top: -14px;
  left: 10px;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 98%;
  height: 90%;
  border: 0;
  outline: none;
  padding-left: 5px;

  ::placeholder {
    color: silver;
    font-size: 14px;
  }
`;
