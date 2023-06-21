import {Box } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import { HouseAllowance } from "./components/HouseAllowance";
import { Taxcalculate } from "./components/Taxcalculate";
import { Tabs } from "./components/tabs";
function App() {
  const [tab, setTab] = useState("");
  return (
      <Box display={"flex"} gap={20} width={"60%"} m={"auto"} height={"100%"} mt={20} pb={20} pt={20} justifyContent={"center"}>
        {tab === "/hra" ? <HouseAllowance settabs={setTab}/> : tab==="/tax"? <Taxcalculate settabs={setTab}/> : ""}
        {tab === "" && <Tabs setTab={setTab}/>}
      </Box>

  );
}

export default App;
