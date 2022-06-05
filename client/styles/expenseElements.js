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
  border-radius: 4px;
  margin: 20px 20px 20px 0px;
  font-family: "Playfair Display", serif;
  font-family: "Poppins", sans-serif;
`;
export const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  margin: 0px 10px;
`;
export const EndDiv = styled.div`
  display: flex;
  flex: 0.3;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: column;
  min-width: 330px;
  max-width: 330px;
  margin: 0px 0px 0px 20px;
`;
export const TopDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;
export const TransactionsDiv = styled.div``;
export const TransactionDiv = styled.div`
  display: flex;
`;
export const Text = styled.p``;
export const IconDiv = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 5px;
  margin: 10px;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 150px;
  margin: 10px;
`;
export const Dot = styled.div``;
export const Name = styled.h1`
  font-size: 14px;
  margin: 0px;
`;
export const Date = styled.h1`
  font-size: 10px;
  margin: 0px;
  font-weight: normal;
`;
export const PriceDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 60px;
`;
export const Price = styled.h1`
  font-size: 16px;
  margin: 0px;
  color: #d10a0a;
  color: ${(props) => (props.color ? "#d10a0a" : "#0dca83")};
`;
export const CategoriesDiv = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
  width: 100%;
  justify-content: space-between;
`;
export const CategoryDiv = styled.div`
  display: flex;
  background-color: #fff;
  height: 120px;
  max-width: 220px;
  min-width: 200px;
  flex: 1;
  border-radius: 5px;
`;
export const CategoryInfoDiv = styled.div`
  display: flex;
  flex: 0.65;
  flex-direction: column;
  margin: 20px;
`;
export const Amount = styled.p`
  font-size: 16px;
  margin: 0px;
`;
export const CategoryName = styled.p`
  margin: 0px 0px 10px 0px;
  white-space: nowrap;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 18px;
  color: black;
`;
export const ImageDiv = styled.div`
  display: flex;
  flex: 0.35;
`;
export const GraphWrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
`;
export const TimeFrameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 300px;
`;
export const TimeFrameButtonsDiv = styled.div`
  display: flex;
  margin: 10px;
  flex: 0.6;
`;
export const TimeFrameButtons = styled.div`
  display: flex;
  width: 80px;
  height: 35px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.p`
  margin: 0px;
`;
export const LegendDiv = styled.div`
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 0px 0px;
`;
export const Legend = styled.p`
  margin: 0px 10px;
`;
export const GraphDiv = styled.div`
  display: flex;
`;
export const MonthsDiv = styled.div`
  display: flex;
`;
export const Month = styled.div`
  display: flex;
`;
