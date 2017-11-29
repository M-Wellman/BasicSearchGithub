import React from 'react';
import { render } from 'react-dom';
import {Home, Search, MyRepos} from './screens';

const Index = ({ pathname }) => {
  switch(pathname) {
    default:
      return <Home />;
    case "/Search":
      return <Search />;
    case "/MyRepos":
      return <MyRepos />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
