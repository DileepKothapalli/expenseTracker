import axios from "axios";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
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
  const coloru = [];
  const data = {
    labels: key,
    datasets: [
      {
        label: "Expenses",
        data: value,
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
          "rgba(232,99,132,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  const options = {
    animation: false,

    plugins: {
      title: {
        display: true,
        text: "Categories",
        color: "blue",
        font: {
          size: 26,
          // family: "sans-serif",

          family: "Poppins , sans-serif",
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          duration: 0,
        },
      },
    },
  };
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const transactionsHandler = async () => {
        const transactions = await axios
          .get(`http://localhost:8080/transactions/${session.user.email}`)
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log("first");

        setTransaction_data(transactions.data);
      };

      transactionsHandler();
    }
  }, [session]);

  useEffect(() => {
    const data = new Map();
    transaction_data.forEach((element) => {
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
  }, [transaction_data]);

  useEffect(() => {
    if (!document.cookie) {
      Router.push("/");
    }
  }, []);

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
          <EndDiv>
            <Doughnut data={data} options={options} />
          </EndDiv>
        </MainDiv>
      )}
    </Div>
  );
};

export default expenses;
