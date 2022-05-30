import styled from "styled-components";

export const Div = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  background: rgb(27, 231, 177);
  background: linear-gradient(
    90deg,
    rgba(27, 231, 177, 1) 40%,
    rgba(255, 255, 255, 1) 40%
  );
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  /* font-family: "Playfair Display", serif; */
  /* font-family: "Poppins", sans-serif; */
  /* font-family: ; */
  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, , sans-serif; */
`;

export const LoginDiv = styled.div`
  display: flex;
  background: rgb(27, 231, 177);
  background: linear-gradient(
    90deg,
    rgba(27, 231, 177, 1) 37.42%,
    rgba(255, 255, 255, 1) 37.42%
  );
  min-height: 70vh;
  max-height: 70vh;
  min-width: 80vw;
  max-width: 80vw;
  background-position: center;
  box-shadow: 0px 0px 40px 0px #999;
`;

export const LogoDiv = styled.div`
  display: flex;

  flex: 0.3745;
`;

export const FormDiv = styled.div`
  display: flex;
  flex: 0.6255;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const SignupFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.p`
  margin-bottom: 2px;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
`;
export const Input = styled.input`
  height: 36px;
  width: 270px;
  outline: none;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding-left: 4px;
  font-family: "Open Sans", sans-serif;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
`;

export const InputDiv = styled.div``;
export const Button = styled.button`
  border: none;
  background-color: rgb(27, 231, 177);
  width: 270px;
  height: 32px;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  margin-top: 10px;
`;

export const ChangeTextDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0px;
  flex-direction: column;
`;

export const ChangeText = styled.h1`
  font-size: 12px;
  margin-right: 3px;
  cursor: pointer;
`;
