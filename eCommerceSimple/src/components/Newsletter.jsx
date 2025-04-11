import { MdSend } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from you favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
