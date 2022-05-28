import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import {
  Div,
  ElementDiv,
  Heading,
  HeadingInfo,
  Info,
  MainDiv,
  TransactionDiv,
  TransactionsDiv,
} from "../styles/expenseElements";

const expenses = () => {
  useEffect(() => {
    if (!document.cookie) {
      Router.push("/");
    }
  }, []);

  return (
    <Div>
      <Sidebar />
      <MainDiv>
        <TransactionsDiv>
          <Heading>
            <ElementDiv>
              <HeadingInfo>Amount</HeadingInfo>
            </ElementDiv>
            <ElementDiv>
              <HeadingInfo>Reason</HeadingInfo>
            </ElementDiv>
            <ElementDiv>
              <HeadingInfo>Date</HeadingInfo>
            </ElementDiv>
            <ElementDiv>
              <HeadingInfo>Category</HeadingInfo>
            </ElementDiv>
          </Heading>
        </TransactionsDiv>
      </MainDiv>
    </Div>
  );
};

export default expenses;
