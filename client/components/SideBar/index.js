// import Cookies from "js-cookie";
import Link from "next/link";
import Router from "next/router";

import React, { useEffect, useState } from "react";
import { Div, NavLinkDiv, NavLinks, NavLinksDiv } from "./SidebarElements";

import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  // const [isCookie, setisCookie] = useState(null);
  // useEffect(() => {
  //   setisCookie(Cookies.get("token"));
  // });  

  function handleOnClickLogout(e) {
    // setLogout(e);
    // console.log(document.cookie);
    // Cookies.remove("token");
    // Cookies.remove("email");
  }
  const { data: session } = useSession();

  return (
    <Div>
      <NavLinksDiv>
        <NavLinkDiv>
          <Link href="/overview">
            <NavLinks>Overview</NavLinks>
          </Link>
        </NavLinkDiv>
        <NavLinkDiv>
          <Link href="/expenses">
            <NavLinks>Expenses</NavLinks>
          </Link>
        </NavLinkDiv>
        <NavLinkDiv>
          <Link href="/income">
            <NavLinks>Income</NavLinks>
          </Link>
        </NavLinkDiv>
        <NavLinkDiv>
          <Link href="/settings">
            <NavLinks>Settings</NavLinks>
          </Link>
        </NavLinkDiv>
        {session && (
          <NavLinkDiv>
            <Link href="">
              <NavLinks onClick={() => signOut()}>SignOut</NavLinks>
            </Link>
          </NavLinkDiv>
        )}
      </NavLinksDiv>
    </Div>
  );
}

export default Sidebar;
