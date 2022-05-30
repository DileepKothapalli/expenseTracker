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
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [transaction_data, setTransaction_data] = useState();

  useEffect(() => {
    const transactionsHandler = async () => {
      const transactions = await axios
        .get("http://localhost:8080/transactions")
        .catch((error) => {
          console.error("Error:", error);
        });
      setTransaction_data(transactions?.data);
      const expenseAmount = 0;
      const incomeAmount = 0;
      transaction_data?.forEach((element) => {
        if (element.flag) {
          expenseAmount = expenseAmount + element.amount;
        } else {
          incomeAmount = incomeAmount + element.amount;
        }
        console.log(element.amount, element.flag);
      });

      setExpenseTotal(expenseAmount);
      setIncomeTotal(incomeAmount);
    };
    transactionsHandler();
  }, [transaction_data]);

  function check() {
    const data = new Map();
    transaction_data.forEach((element) => {
      if (data.has(element.category)) {
        data.set(element.category, data.get(element.category) + element.amount);
      } else {
        data.set(element.category, +element.amount);
      }
    });
    console.log(data);
  }
  // function check1() {}
  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <MidDiv>
          {/* <button onClick={check1}>check</button> */}
          <CategoriesDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Expenses</CategoryName>
                <Amount>{expenseTotal}</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Income</CategoryName>
                <Amount>{incomeTotal}</Amount>
              </CategoryInfoDiv>
              <ImageDiv></ImageDiv>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryInfoDiv>
                <CategoryName>Budget</CategoryName>
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
                    <Price color={d.flag}>₹ {d.amount}</Price>
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
