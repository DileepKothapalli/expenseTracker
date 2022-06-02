import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Spend from "../components/Spend";
import Sidebar from "../components/SideBar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Div } from "../styles/indexElements";
export default function Home() {
  const [isCookie, setisCookie] = useState(null);
  // useEffect(() => {
  //   setisCookie(Cookies.get("token"));
  // });
  const { data: session } = useSession();

  return (
    <Div>
      <Sidebar />
      {session && <Spend />}
    </Div>
  );
}
