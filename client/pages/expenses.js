import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import {
  Amount,
  ButtonText,
  CategoriesDiv,
  CategoryDiv,
  CategoryInfoDiv,
  CategoryName,
  Date,
  Div,
  Dot,
  EndDiv,
  GraphDiv,
  GraphWrapper,
  IconDiv,
  ImageDiv,
  InfoDiv,
  Legend,
  LegendDiv,
  Link,
  MainDiv,
  MidDiv,
  Month,
  MonthsDiv,
  Name,
  Price,
  PriceDiv,
  Text,
  TimeFrameButtons,
  TimeFrameButtonsDiv,
  TimeFrameDiv,
  TopDiv,
  TopDivLink,
  TopDivLinks,
  TransactionDiv,
  TransactionsDiv,
} from "../styles/expenseElements";

const expenses = () => {
  const [transaction_data, setTransaction_data] = useState();

  useEffect(() => {
    const transactionsHandler = async () => {
      const transactions = await axios
        .get("http://localhost:8080/transactions")
        .catch((error) => {
          console.error("Error:", error);
        });
      setTransaction_data(transactions?.data);
    };
    transactionsHandler();
  }, [transaction_data]);

  useEffect(() => {
    if (!document.cookie) {
      Router.push("/");
    }
  }, []);

  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <MidDiv>
          {/* <button onClick={check1}>check</button> */}
          <CategoriesDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Food</CategoryName>
                <Amount>{}</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Shopping</CategoryName>
                <Amount>{}</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>budget</CategoryName>
                <Amount>10000</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
          </CategoriesDiv>
          <GraphWrapper>
            <TimeFrameDiv>
              <TimeFrameButtonsDiv>
                <TimeFrameButtons>
                  <ButtonText>1 Month</ButtonText>
                </TimeFrameButtons>
                <TimeFrameButtons>
                  <ButtonText>3 Month</ButtonText>
                </TimeFrameButtons>
                <TimeFrameButtons>
                  <ButtonText>6 Month</ButtonText>
                </TimeFrameButtons>
                <TimeFrameButtons>
                  <ButtonText>1 Year</ButtonText>
                </TimeFrameButtons>
              </TimeFrameButtonsDiv>

              <LegendDiv>
                <Legend>Expenses</Legend>
                <Legend>Income</Legend>
              </LegendDiv>
            </TimeFrameDiv>
            <GraphDiv></GraphDiv>
            <MonthsDiv>
              <Month></Month>
            </MonthsDiv>
          </GraphWrapper>
        </MidDiv>
        <EndDiv></EndDiv>
      </MainDiv>
    </Div>
  );
};

export default expenses;
