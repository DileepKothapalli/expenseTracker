import Link from "next/link";
import {
  Div,
  Logo,
  LogoDiv,
  Nav,
  NavLinkDiv,
  NavLinks,
  NavLinksDiv,
  AddRecord,
  Icon,
  AddrecordDiv,
} from "./NavbarElements";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isCookie, setisCookie] = useState(null);
  useEffect(() => {
    setisCookie(Cookies.get("token"));
  });

  // const isCookie = Cookies.get("token");

  return (
    <Div>
      <Nav>
        <LogoDiv>
          <a href="/">
            <Logo>Expense-Tracker</Logo>
          </a>
        </LogoDiv>
        <NavLinksDiv>
          {!isCookie && (
            <NavLinkDiv marginRight="140px">
              <Link href="/signin">
                <NavLinks>SignIn</NavLinks>
              </Link>
            </NavLinkDiv>
          )}

          {isCookie && (
            <NavLinkDiv marginRight="40px">
              <Link href="/">
                <AddrecordDiv>
                  <Icon src="/favicon/add.png" />
                  <AddRecord>Add Record</AddRecord>
                </AddrecordDiv>
              </Link>
            </NavLinkDiv>
          )}
          {isCookie && <NavLinkDiv marginRight="45px">Hi Dileep</NavLinkDiv>}
        </NavLinksDiv>
      </Nav>
    </Div>
  );
};

export default Navbar;
