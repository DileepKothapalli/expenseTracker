import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  background-color: #fff;
  margin: 20px;
  border-radius: 4px;
  margin: 20px 40px 20px 20px;
`;
export const Div1 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  background-color: #fff;
  margin: 20px;
  border-radius: 4px;
  margin: 20px 40px 20px 20px;
`;
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  min-width: 440px;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TopDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  min-width: 400px;
  max-width: 400px;
  border-radius: 5px;
  position: relative;
`;

export const Income = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  padding: 10px;
  background-color: #0dca83;
  background-color: #2a3139;
  background-color: ${(props) => (props.color ? "#2a3139" : "#0dca83")};
  transition: all 0.3s;
  color: white;
  color: ${(props) => (props.color ? "#888" : "#000")};
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
`;

export const Expense = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  background-color: #eb4b5f;
  background-color: ${(props) => (props.color ? "#eb4b5f" : "#2a3139")};
  transition: all 0.3s;
  color: white;
  color: ${(props) => (props.color ? "#fff" : "#888")};
  border-radius: 5px 0px 0px 5px;
  cursor: pointer;
`;

export const Diamond = styled.button`
  position: absolute;
  min-height: 28px;
  min-width: 28px;
  left: 46.5%;
  top: 14%;
  transition: all 0.3s;
  outline: none;
  border: none;
  transform: rotate(45deg);
  background-color: #eb4b5f;
  background-color: #2a3139;
  background-color: ${(props) => (props.color ? "#eb4b5f" : "#0dca83")};
  cursor: pointer;
  border-radius: 4px;
`;

export const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0px 20px;
`;

export const InputDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #efefef;
  margin: 10px 0px;
  height: 50px;
  min-width: 100%;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 40px;
  min-width: 50px;
`;

export const Icon = styled.img``;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Poppins", sans-serif;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s;
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.color ? "#eb4b5f" : "#0dca83")};
  color: ${(props) => (props.color ? "#fff" : "#000")};
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Poppins", sans-serif;
`;
