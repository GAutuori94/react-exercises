import React from "react";
import { DisplayLanguage } from "./displayLanguage";
import { LanguageContext } from "./languageContext";

export default class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
        <LanguageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
          <DisplayLanguage />
        </LanguageContext.Provider>  
    );
  }
}
