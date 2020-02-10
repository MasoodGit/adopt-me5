import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   <Pet name="Pepper" animal="Dog" breed="Labs"/>,
  //   <Pet name="Jingles" animal="Bird" breed="Parrot"/>,
  //   <Pet name="Salt" animal="Cat" breed="Mix"/>
  // ]);
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details  path="/details/:id"/>
      </Router>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
