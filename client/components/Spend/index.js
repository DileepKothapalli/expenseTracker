import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonDiv,
  Diamond,
  Div,
  Expense,
  Icon,
  IconDiv,
  Income,
  Input,
  InputDiv,
  MainDiv,
  MidDiv,
  TopDiv,
} from "./spendElements";

const Spend = () => {
  const [color, setcolor] = useState(1);
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState(null);
  useEffect(() => {
    setEmail(Cookies.get("email"));
  });
  function incomeColorHandler() {
    setcolor(0);
  }
  function expenseColorHandler() {
    setcolor(1);
  }
  async function submitHandler(e) {
    e.preventDefault();
    console.log(amount);
    console.log(reason);
    console.log(date);
    console.log(category);

    if (color) {
      const expense = await axios
        .post("http://localhost:8080/expense", {
          amount: amount,
          reason: reason,
          date: date,
          category: category,
          email: email,
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const income = await axios
        .post("http://localhost:8080/income", {
          amount: amount,
          reason: reason,
          date: date,
          category: category,
          email: email,
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    document.getElementById("income-expense-form").reset();
  }

  return (
    <Div>
      <MainDiv>
        <TopDiv>
          <Diamond color={color}></Diamond>
          <Expense onClick={expenseColorHandler} color={color}>
            Expense
          </Expense>
          <Income onClick={incomeColorHandler} color={color}>
            Income
          </Income>
        </TopDiv>

        <MidDiv>
          <form id="income-expense-form" onSubmit={submitHandler}>
            <InputDiv>
              <IconDiv>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.00004C2 1.00004 3.74264 1.00004 5.5 1.00004M10 17L3 10C3 10 4.5 10 5.5 10C6.5 10 11 10.0618 11 5.50004C11 0.938253 6.5 1.00004 5.5 1.00004M14 1.00004C14 1.00004 8.42893 1.00004 5.5 1.00004M2 5.50004H14"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </IconDiv>
              <Input
                placeholder="Enter Amount"
                required
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </InputDiv>
            <InputDiv>
              <IconDiv>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 75 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.2612 0H2.67634C1.19599 0 0 1.19599 0 2.67634V16.058H74.9375V2.67634C74.9375 1.19599 73.7415 0 72.2612 0ZM0 56.2031C0 57.6835 1.19599 58.8795 2.67634 58.8795H72.2612C73.7415 58.8795 74.9375 57.6835 74.9375 56.2031V23.418H0V56.2031ZM48.425 40.8142C48.425 40.4462 48.7261 40.1451 49.0941 40.1451H62.894C63.262 40.1451 63.5631 40.4462 63.5631 40.8142V46.8359C63.5631 47.2039 63.262 47.505 62.894 47.505H49.0941C48.7261 47.505 48.425 47.2039 48.425 46.8359V40.8142Z"
                    fill="#000"
                  />
                </svg>
              </IconDiv>
              {color ? (
                <Input
                  placeholder="What was this spend for?"
                  required
                  onChange={(event) => {
                    setReason(event.target.value);
                  }}
                />
              ) : (
                <Input
                  placeholder="Enter Remitter"
                  required
                  onChange={(event) => {
                    setReason(event.target.value);
                  }}
                />
              )}
            </InputDiv>
            <InputDiv>
              <IconDiv>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 68 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.3334 7.50004H60.6667C64.3334 7.50004 67.3334 10.5 67.3334 14.1667V67.5C67.3334 71.1667 64.3334 74.1667 60.6667 74.1667H7.33335C3.66669 74.1667 0.666687 71.1667 0.666687 67.5V14.1667C0.666687 10.5 3.66669 7.50004 7.33335 7.50004H10.6667V4.16671C10.6667 2.33337 12.1667 0.833374 14 0.833374C15.8334 0.833374 17.3334 2.33337 17.3334 4.16671V7.50004H50.6667V4.16671C50.6667 2.33337 52.1667 0.833374 54 0.833374C55.8334 0.833374 57.3334 2.33337 57.3334 4.16671V7.50004ZM10.6667 67.5H57.3334C59.1667 67.5 60.6667 66 60.6667 64.1667V24.1667H7.33335V64.1667C7.33335 66 8.83335 67.5 10.6667 67.5Z"
                    fill="#000"
                  />
                </svg>
              </IconDiv>
              <Input
                placeholder="Date and Time"
                required
                type="date"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </InputDiv>
            <InputDiv>
              <IconDiv>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 30.4262C0 16.0832 0 8.91164 4.45582 4.45582C8.91164 0 16.0832 0 30.4262 0H33.5738C47.9168 0 55.0884 0 59.5442 4.45582C64 8.91164 64 16.0832 64 30.4262V33.5738C64 47.9168 64 55.0884 59.5442 59.5442C55.0884 64 47.9168 64 33.5738 64H30.4262C16.0832 64 8.91164 64 4.45582 59.5442C0 55.0884 0 47.9168 0 33.5738V30.4262Z"
                    fill="#050B15"
                  />
                  <path
                    d="M22.6071 33.3341L25.6258 33.3354C26.9791 33.3502 27.6928 33.5013 28.4337 33.8976C29.1511 34.2813 29.7202 34.8503 30.1039 35.5678C30.5221 36.3498 30.6673 37.1016 30.6673 38.6073V41.3943C30.6673 42.9 30.5221 43.6518 30.1039 44.4338C29.7202 45.1513 29.1511 45.7204 28.4337 46.1041C27.6516 46.5223 26.8998 46.6675 25.3942 46.6675H22.6071C21.1015 46.6675 20.3497 46.5223 19.5676 46.1041C18.8502 45.7204 18.2811 45.1513 17.8974 44.4338C17.4792 43.6518 17.334 42.9 17.334 41.3943L17.3352 38.3757C17.35 37.0224 17.5012 36.3087 17.8974 35.5678C18.2811 34.8503 18.8502 34.2813 19.5676 33.8976C20.3497 33.4793 21.1015 33.3341 22.6071 33.3341ZM38.6071 33.3341L41.6258 33.3354C42.9791 33.3502 43.6928 33.5013 44.4337 33.8976C45.1511 34.2813 45.7202 34.8503 46.1039 35.5678C46.5221 36.3498 46.6673 37.1016 46.6673 38.6073V41.3943C46.6673 42.9 46.5221 43.6518 46.1039 44.4338C45.7202 45.1513 45.1511 45.7204 44.4337 46.1041C43.6516 46.5223 42.8998 46.6675 41.3942 46.6675H38.6071C37.1015 46.6675 36.3497 46.5223 35.5676 46.1041C34.8502 45.7204 34.2811 45.1513 33.8974 44.4338C33.4792 43.6518 33.334 42.9 33.334 41.3943L33.3352 38.3757C33.35 37.0224 33.5012 36.3087 33.8974 35.5678C34.2811 34.8503 34.8502 34.2813 35.5676 33.8976C36.3497 33.4793 37.1015 33.3341 38.6071 33.3341ZM25.3942 35.3341L22.4233 35.3349C21.3571 35.3435 20.9397 35.4318 20.5108 35.6612C20.1419 35.8585 19.8583 36.1421 19.661 36.511C19.4189 36.9637 19.334 37.4036 19.334 38.6073L19.3347 41.5782C19.3434 42.6444 19.4317 43.0618 19.661 43.4906C19.8583 43.8596 20.1419 44.1431 20.5108 44.3404C20.9159 44.5571 21.3106 44.6479 22.2515 44.6646L22.6071 44.6675H25.3942C26.5979 44.6675 27.0378 44.5825 27.4905 44.3404C27.8594 44.1431 28.143 43.8596 28.3403 43.4906C28.5569 43.0856 28.6477 42.6908 28.6644 41.75L28.6673 41.3943V38.6073C28.6673 37.4036 28.5824 36.9637 28.3403 36.511C28.143 36.1421 27.8594 35.8585 27.4905 35.6612C27.0378 35.4191 26.5979 35.3341 25.3942 35.3341ZM41.3942 35.3341L38.4233 35.3349C37.3571 35.3435 36.9397 35.4318 36.5108 35.6612C36.1419 35.8585 35.8583 36.1421 35.661 36.511C35.4189 36.9637 35.334 37.4036 35.334 38.6073L35.3347 41.5782C35.3434 42.6444 35.4317 43.0618 35.661 43.4906C35.8583 43.8596 36.1419 44.1431 36.5108 44.3404C36.9159 44.5571 37.3106 44.6479 38.2515 44.6646L38.6071 44.6675H41.3942C42.5979 44.6675 43.0378 44.5825 43.4905 44.3404C43.8594 44.1431 44.143 43.8596 44.3403 43.4906C44.5569 43.0856 44.6477 42.6908 44.6644 41.75L44.6673 41.3943V38.6073C44.6673 37.4036 44.5824 36.9637 44.3403 36.511C44.143 36.1421 43.8594 35.8585 43.4905 35.6612C43.0378 35.4191 42.5979 35.3341 41.3942 35.3341ZM38.8196 16.5505C39.5983 16.3145 40.403 16.3145 41.1817 16.5505C42.0304 16.8078 42.6647 17.2367 43.7293 18.3014L45.863 20.4368C46.8094 21.4042 47.2072 22.0157 47.4509 22.8198C47.6869 23.5984 47.6869 24.4032 47.4509 25.1819C47.1937 26.0306 46.7647 26.6648 45.7001 27.7295L43.7293 29.7002C42.6647 30.7649 42.0304 31.1938 41.1817 31.4511C40.403 31.6871 39.5983 31.6871 38.8196 31.4511C37.9709 31.1938 37.3366 30.7649 36.272 29.7002L34.3012 27.7295C33.2366 26.6648 32.8076 26.0306 32.5504 25.1819C32.3144 24.4032 32.3144 23.5984 32.5504 22.8198C32.8076 21.9711 33.2366 21.3368 34.3012 20.2721L36.4366 18.1385C37.404 17.1921 38.0156 16.7942 38.8196 16.5505ZM22.6071 17.3341L25.6258 17.3354C26.9791 17.3502 27.6928 17.5013 28.4337 17.8975C29.1511 18.2813 29.7202 18.8503 30.1039 19.5678C30.5221 20.3498 30.6673 21.1016 30.6673 22.6073V25.3943C30.6673 26.9 30.5221 27.6518 30.1039 28.4338C29.7202 29.1513 29.1511 29.7204 28.4337 30.1041C27.6516 30.5223 26.8998 30.6675 25.3942 30.6675H22.6071C21.1015 30.6675 20.3497 30.5223 19.5676 30.1041C18.8502 29.7204 18.2811 29.1513 17.8974 28.4338C17.4792 27.6518 17.334 26.9 17.334 25.3943L17.3352 22.3757C17.35 21.0224 17.5012 20.3087 17.8974 19.5678C18.2811 18.8503 18.8502 18.2813 19.5676 17.8975C20.3497 17.4793 21.1015 17.3341 22.6071 17.3341ZM40.6016 18.4646C40.2012 18.3432 39.8001 18.3432 39.3997 18.4646C38.9085 18.6135 38.5374 18.8644 37.6862 19.7156L35.586 21.8168C34.8381 22.5769 34.6055 22.9345 34.4644 23.3999C34.343 23.8003 34.343 24.2013 34.4644 24.6017C34.5976 25.0413 34.8126 25.3846 35.466 26.0617L35.7155 26.3153L37.6862 28.286C38.5374 29.1372 38.9085 29.3882 39.3997 29.5371C39.8001 29.6584 40.2012 29.6584 40.6016 29.5371C41.0411 29.4038 41.3845 29.1889 42.0616 28.5354L42.3151 28.286L44.2859 26.3153C45.137 25.4641 45.388 25.093 45.5369 24.6017C45.6583 24.2013 45.6583 23.8003 45.5369 23.3999C45.388 22.9086 45.137 22.5375 44.2859 21.6863L42.1846 19.5861C41.4246 18.8383 41.067 18.6056 40.6016 18.4646ZM25.3942 19.3341L22.4233 19.3349C21.3571 19.3435 20.9397 19.4318 20.5108 19.6612C20.1419 19.8585 19.8583 20.1421 19.661 20.511C19.4189 20.9637 19.334 21.4036 19.334 22.6073L19.3347 25.5782C19.3434 26.6444 19.4317 27.0618 19.661 27.4906C19.8583 27.8596 20.1419 28.1431 20.5108 28.3404C20.9159 28.557 21.3106 28.6479 22.2515 28.6646L22.6071 28.6675H25.3942C26.5979 28.6675 27.0378 28.5825 27.4905 28.3404C27.8594 28.1431 28.143 27.8596 28.3403 27.4906C28.5569 27.0856 28.6477 26.6908 28.6644 25.75L28.6673 25.3943V22.6073C28.6673 21.4036 28.5824 20.9637 28.3403 20.511C28.143 20.1421 27.8594 19.8585 27.4905 19.6612C27.0378 19.4191 26.5979 19.3341 25.3942 19.3341Z"
                    fill="white"
                  />
                </svg>
              </IconDiv>

              {color ? (
                <Input
                  placeholder="Category"
                  required
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                />
              ) : (
                <Input
                  placeholder="Credit"
                  required
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                />
              )}
            </InputDiv>

            <ButtonDiv>
              {/* <Button color={color}>SAVE & ADD ANOTHER </Button> */}

              {color ? (
                <Button color={color} type="submit">
                  Save
                </Button>
              ) : (
                <Button color={color} onClick={incomeHandler}>
                  Save
                </Button>
              )}
            </ButtonDiv>
          </form>
        </MidDiv>
      </MainDiv>
    </Div>
  );
};

export default Spend;
