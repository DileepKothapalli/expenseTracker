import { Div, MainDiv } from "../styles/indexElements";

import { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
const dashboard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Div>
      <Sidebar />
      <MainDiv></MainDiv>
    </Div>
  );
};

export default dashboard;
