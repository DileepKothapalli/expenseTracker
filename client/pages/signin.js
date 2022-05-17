import { providers, signIn, getSession, csrfToken } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { NextResponse, NextRequest } from "next/server";

import {
  Button,
  ChangeText,
  ChangeTextDiv,
  Div,
  FormDiv,
  Heading,
  Input,
  InputContainer,
  InputDiv,
  Label,
  LoginDiv,
  LoginFormDiv,
  LogoDiv,
  SignupFormDiv,
} from "../styles/indexElements";
import Cookies from "js-cookie";

export default function SignIn({ csrfToken }) {
  const [login, setLogin] = useState(true);
  const [signupemail, setSignupemail] = useState(false);
  const [signupphone, setSignupphone] = useState(false);
  const [signuppass, setSignuppass] = useState(false);
  const [loginemail, setLoginemail] = useState(false);
  const [loginpass, setLoginpass] = useState(false);
  function toggleHandler() {
    setLogin(!login);
  }

  async function loginHandler(e) {
    e.preventDefault();
    console.log(loginemail);
    console.log(loginpass);
    const data = {
      email: loginemail,
      password: loginpass,
    };
    const loginApi = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error("Error:", error);
    });

    let result = await loginApi.json();

    if (result.success && result.token) {
      Cookies.set("token", result.token);
      Router.push("/");
    } else {
      // window.location.reload();
    }
  }

  function signupHandler() {}

  return (
    <Div>
      <LoginDiv>
        <LogoDiv></LogoDiv>

        <FormDiv>
          {login && (
            <form onSubmit={loginHandler}>
              <LoginFormDiv>
                <Heading>Log in</Heading>
                <input name="csrfToken" type="hidden" />
                <InputDiv>
                  <InputContainer>
                    <Label>Email</Label>
                    <Input
                      placeholder=" joe@email.com"
                      name="email"
                      type="email"
                      required
                      onChange={(event) => {
                        setLoginemail(event.target.value);
                      }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Password</Label>
                    <Input
                      placeholder=" Enter Your Password"
                      name="password"
                      type="password"
                      required
                      onChange={(event) => {
                        setLoginpass(event.target.value);
                      }}
                    />
                  </InputContainer>
                </InputDiv>
                <ChangeTextDiv>
                  <Button type="submit">Login</Button>
                  <ChangeText onClick={toggleHandler}>sign up</ChangeText>
                </ChangeTextDiv>
              </LoginFormDiv>
            </form>
          )}

          {!login && (
            <form>
              <SignupFormDiv>
                <Heading>Sign up</Heading>
                <InputDiv>
                  <InputContainer>
                    <Label>Email</Label>
                    <Input
                      placeholder=" joe@email.com"
                      type="email"
                      required
                      onChange={(event) => {
                        setSignupemail(event.target.value);
                      }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Phone</Label>
                    <Input
                      placeholder=" 9876543210"
                      type="text"
                      required
                      onChange={(event) => {
                        setSignupphone(event.target.value);
                      }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Password</Label>
                    <Input
                      placeholder=" Enter Your Password"
                      type="password"
                      required
                      onChange={(event) => {
                        setSignupemail(event.target.value);
                      }}
                    />
                  </InputContainer>
                  {/* <InputContainer>
                        <Label>Username</Label>
                        <Input placeholder=" Username" type="password" />
                      </InputContainer> */}
                </InputDiv>
                <ChangeTextDiv>
                  <Button type="submit">Sign up</Button>
                  <ChangeText onClick={toggleHandler}>login</ChangeText>
                </ChangeTextDiv>
              </SignupFormDiv>
            </form>
          )}
        </FormDiv>
      </LoginDiv>
    </Div>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }
