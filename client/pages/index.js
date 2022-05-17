import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Spend from "../components/Spend";

import { getAppCookies } from "../middleware/utils";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const body = {
    headers: {
      cookie: "he",
    },
  };

  console.log({ session }, { loading });

  return (
    <div className={styles.container}>
      {session && <h3>user.email</h3>}
      <Spend />
    </div>
  );
}
