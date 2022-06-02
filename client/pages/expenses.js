import axios from "axios";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
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
  const [transaction_data, setTransaction_data] = useState([]);
  const [key, setKeys] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const transactionsHandler = async () => {
      const transactions = await axios
        .get(`http://localhost:8080/transactions/${session.user.email}`)
        .catch((error) => {
          console.error("Error:", error);
        });
      setTransaction_data(transactions?.data);

      const data = new Map();
      transaction_data?.forEach((element) => {
        if (element.flag) {
          if (data.has(element.category)) {
            data.set(
              element.category,
              data.get(element.category) + element.amount
            );
          } else {
            data.set(element.category, +element.amount);
          }
        }
      });

      const keys = [...data.keys()];
      const values = [...data.values()];

      setKeys(keys);
      setValue(values);
    };
    if (session) {
      transactionsHandler();
    }
  }, [transaction_data]);

  useEffect(() => {
    if (!document.cookie) {
      Router.push("/");
    }
  }, []);
  // const [isCookie, setisCookie] = useState(null);
  // useEffect(() => {
  //   setisCookie(Cookies.get("token"));
  // });
  const { data: session } = useSession();

  return (
    <Div>
      <Sidebar />
      {session && (
        <MainDiv>
          <MidDiv>
            {/* <button onClick={check}>check</button> */}
            <CategoriesDiv>
              {(function () {
                let rows = [];
                for (let j = 0; j < 3; j++) {
                  rows.push(
                    <CategoryDiv key={j}>
                      <CategoryInfoDiv>
                        {key && (
                          <>
                            <CategoryName>{key[j]}</CategoryName>
                            <Amount>{value[j]}</Amount>
                          </>
                        )}
                      </CategoryInfoDiv>
                      <ImageDiv></ImageDiv>
                    </CategoryDiv>
                  );
                }
                return rows;
              })()}
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
      )}
    </Div>
  );
};

export default expenses;
