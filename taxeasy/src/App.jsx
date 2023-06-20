import {Container } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import { HouseAllowance } from "./components/HouseAllowance";
import { Taxcalculate } from "./components/Taxcalculate";
import { Tabs } from "./components/tabs";
function App() {
  const [tab, setTab] = useState("");
  return (
    <>
      <Container display={"flex"} gap={20}>
        {tab === "/hra" ? <HouseAllowance/> : tab==="/tax"? <Taxcalculate/> : ""}
        {tab === "" && <Tabs setTab={setTab}/>}
      </Container>
    </>
  );
}

export default App;
