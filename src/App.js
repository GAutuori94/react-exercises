import React from "react";
import { GithubUser, GithubUserList } from "./apifetcher";

export default class App extends React.Component {
 
  render() {
    return (
        <GithubUserList />
    )
  }
}
