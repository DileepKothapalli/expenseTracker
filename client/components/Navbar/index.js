import Link from "next/link";
import {
  Div,
  Logo,
  LogoDiv,
  Nav,
  NavLinkDiv,
  NavLinks,
  NavLinksDiv,
} from "./NavbarElements";
import { setLogout } from "../../middleware/utils";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  function handleOnClickLogout(e) {
    setLogout(e);
  }

  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <Div>
      <Nav>
        <LogoDiv>
          <a href="/">
            <Logo>Expense-Tracker</Logo>
          </a>{" "}
        </LogoDiv>
        <NavLinksDiv>
          <NavLinkDiv>
            <Link href="/dashboard">
              <NavLinks>Dashboard</NavLinks>
            </Link>
          </NavLinkDiv>
          <NavLinkDiv>
            <Link href="/reports">
              <NavLinks>Reports</NavLinks>
            </Link>
          </NavLinkDiv>
          <NavLinkDiv>
            <Link href="/settings">
              <NavLinks>Settings</NavLinks>
            </Link>
          </NavLinkDiv>
          {!loading && !session && (
            <NavLinkDiv>
              <Link href="/signin">
                <NavLinks>SignIn</NavLinks>
              </Link>
            </NavLinkDiv>
          )}

          {session && (
            <NavLinkDiv>
              <Link href="">
                <NavLinks onClick={(e) => handleOnClickLogout(e)}>
                  SignOut
                </NavLinks>
              </Link>
            </NavLinkDiv>
          )}
        </NavLinksDiv>
      </Nav>
    </Div>
  );
};

export default Navbar;
