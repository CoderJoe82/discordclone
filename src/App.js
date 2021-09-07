import React from "react";
import { Breakpoint } from "react-socks";
import "./App.css";
import MainDisplay from "./Components/MainDisplay/main.display";

function App() {
  return (
    <React.Fragment>
      <Breakpoint large up>
        <div className="App">
          <h1 id="appTitleText">Basic Discord Clone (offline chat demo)</h1>
          <MainDisplay />
        </div>
      </Breakpoint>
    </React.Fragment>
  );
}

export default App;
