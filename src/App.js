import React, { Component } from "react";

import "./i18n";
import "./App.scss";
import { PasswordManager } from "./views/passwordManager/passwordManager";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordManager />
      </div>
    );
  }
}

export default App;
