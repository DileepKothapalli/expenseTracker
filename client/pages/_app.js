import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
