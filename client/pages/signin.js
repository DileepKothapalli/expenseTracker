import { providers, signIn, getSession, csrfToken } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
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
} from "../styles/signinElements";

export default function SignIn() {
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
    const loginApi = await axios
      .post("http://localhost:8080/login", {
        email: loginemail,
        password: loginpass,
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    let result = loginApi;
    console.log(result);
    if (result.data.success) {
      console.log("first");
      Cookies.set("token", result.data.token);
      Router.push("/");
    } else {
      window.location.reload();
    }
  }

  async function signupHandler(e) {
    e.preventDefault();

    const registerApi = await axios
      .post("http://localhost:8080/register", {
        email: signupemail,
        password: signuppass,
        phone: signupphone,
      })

      .catch((error) => {
        console.error("Error:", error);
      });

    let result = await registerApi;
    if (result == "ok") {
      setLogin(!login);
      console.log("ok");
    } else {
      window.location.reload();
    }
  }

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
            <form onSubmit={signupHandler}>
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
                        setSignuppass(event.target.value);
                      }}
                    />
                  </InputContainer>
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
