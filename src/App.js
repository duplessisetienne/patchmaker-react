import React, { Component } from "react";
import "./App.css";
import PatchOutline from "./components/PatchOuline";
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <body className="App">
        <div className="App">
          <Header title={"Patch Maker"} />
          <PatchOutline />
        </div>
      </body>
    );
  }
}

export default App;
