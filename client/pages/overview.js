import axios from "axios";
import { useState, useEffect } from "react";
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
} from "../styles/overviewElements";
const dashboard = () => {
  const [loading, setLoading] = useState(true);
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

  function check() {
    console.log(transaction_data);
  }
  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <MidDiv>
          <CategoriesDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Food & Drinks</CategoryName>
                <Amount>18256</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Bills & Payments</CategoryName>
                <Amount>4630</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Entertainment</CategoryName>
                <Amount>2367</Amount>
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
                <Legend>Food & Drinks</Legend>
                <Legend>Shopping</Legend>
              </LegendDiv>
            </TimeFrameDiv>
            <GraphDiv></GraphDiv>
            <MonthsDiv>
              <Month></Month>
            </MonthsDiv>
          </GraphWrapper>
        </MidDiv>
        <EndDiv>
          <TopDiv>
            <Text>Transaction History</Text>
          </TopDiv>

          {transaction_data?.map(function (d, idx) {
            return (
              <div>
                <TransactionDiv key={idx}>
                  <IconDiv></IconDiv>
                  <InfoDiv>
                    <Name>{d.reason}</Name>
                    <Date>{d.date.substring(2, 10)}</Date>
                  </InfoDiv>
                  <PriceDiv>
                    <Price>₹ {d.amount}</Price>
                  </PriceDiv>
                  <Dot></Dot>
                </TransactionDiv>
              </div>
            );
          })}

          <TransactionsDiv></TransactionsDiv>
        </EndDiv>
      </MainDiv>
    </Div>
  );
};

export default dashboard;
