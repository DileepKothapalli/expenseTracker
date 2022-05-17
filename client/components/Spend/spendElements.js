import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
`;
export const MainDiv = styled.div`
  display: flex;
  width: 60%;
  height: 50%;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  border: 1px solid #eee;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Line = styled.div`
  background-color: #eee;
  width: 1px;
  height: 90%;
  margin: 20px 0px;
`;
export const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Playfair Display SC", serif;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-size: 20px;
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InputDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Image = styled.div``;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #bbb;
  outline: none;
  height: 30px;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #eee;
  font-family: "Poppins", sans-serif;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 10px;
`;
