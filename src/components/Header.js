import React from "react";
import "primereact/resources/themes/luna-amber/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../App.css";
import logo from "../logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img
            style={{ marginLeft: 10 }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </div>

        <h1 className="App-title">{this.props.title}</h1>
      </header>
    );
  }
}
