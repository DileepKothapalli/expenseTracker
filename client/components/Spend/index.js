import {
  Button,
  Div,
  Form,
  Heading,
  Image,
  Input,
  InputDiv,
  Line,
  MainDiv,
  Wrapper,
} from "./spendElements";

const Spend = () => {
  return (
    <Div>
      <MainDiv>
        <Wrapper>
          <Heading>Add a spend</Heading>
          <Form>
            <InputDiv>
              <Image></Image>
              <Input></Input>
            </InputDiv>
            <InputDiv>
              <Image></Image>
              <Input placeholder="0.00" />
            </InputDiv>
            <InputDiv>
              <Image></Image>
              <Input placeholder="What was this spend for" />
            </InputDiv>
            <InputDiv>
              <Image></Image>
              <Input type="datetime-local" placeholder="" />
            </InputDiv>
            <InputDiv>
              <Image></Image>
              <Input placeholder="category" />
            </InputDiv>
          </Form>
          <Button>Save</Button>
        </Wrapper>
        <Line></Line>
        <Wrapper>
          <Heading>Add an income</Heading>
          <Form>
            <InputDiv>
              <Image></Image>
              <Input />
            </InputDiv>{" "}
            <InputDiv>
              <Image></Image>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Image></Image>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Image></Image>
              <Input></Input>
            </InputDiv>
          </Form>
          <Button>Save</Button>
        </Wrapper>
      </MainDiv>
    </Div>
  );
};

export default Spend;
