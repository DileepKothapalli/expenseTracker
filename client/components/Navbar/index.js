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
  Img,
  DetailsDiv,
  Name,
} from "./NavbarElements";
// import Cookies from "js-cookie";
import { signIn, useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
const Navbar = () => {
  // const [isCookie, setisCookie] = useState(null);
  // useEffect(() => {
  //   setisCookie(Cookies.get("next-auth.session-token"));
  // });

  const { data: session } = useSession();
  return (
    <Div>
      <Nav>
        <LogoDiv>
          <a href="/">
            <Logo>Expense-Tracker</Logo>
          </a>
        </LogoDiv>
        <NavLinksDiv>
          {!session && (
            <NavLinkDiv marginRight="140px">
              <Link href="api/auth/signin">
                <NavLinks
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  SignIn
                </NavLinks>
              </Link>
            </NavLinkDiv>
          )}

          {session && (
            <NavLinkDiv marginRight="40px">
              <Link href="/">
                <AddrecordDiv>
                  <Icon src="/favicon/add.png" />
                  <AddRecord>Add Record</AddRecord>
                </AddrecordDiv>
              </Link>
            </NavLinkDiv>
          )}
          {session && (
            <DetailsDiv>
              <Img src={session.user.image} />
              <Name marginRight="45px">{session.user.name}</Name>
            </DetailsDiv>
          )}
        </NavLinksDiv>
      </Nav>
    </Div>
  );
};

export default Navbar;
