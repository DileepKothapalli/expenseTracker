import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Spend from "../components/Spend";

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>user.email</h3>
      <Spend />
    </div>
  );
}
