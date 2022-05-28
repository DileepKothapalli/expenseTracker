import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height: 90vh;
  max-height: 90vh;
  background-color: #d0d0d0;
`;

export const MainDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  background-color: #fff;
  margin: 20px;
  border-radius: 4px;
  margin: 20px 40px 20px 20px;
`;

export const TransactionsDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;
`;

export const TransactionDiv = styled.div`
  display: flex;
  height: 60px;
  /* width: 100%; */
  margin: 10px 20px;
  border-bottom: 1px solid #eee;
`;

export const Heading = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  /* width: 100%; */
  background-color: #eee;
  margin: 10px 20px;
  border-radius: 5px;
`;

export const ElementDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  width: max-content;
  min-width: 200px;
`;

export const Info = styled.h1`
  font-family: "Playfair Display", serif;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-family: ${(props) => (props.font ? props.font : "Poppins")};
`;

export const HeadingInfo = styled.h1`
  font-family: "Mulish", serif;
  font-size: 18px;
  font-weight: bold;
`;
