import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams';
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   <Pet name="Pepper" animal="Dog" breed="Labs"/>,
  //   <Pet name="Jingles" animal="Bird" breed="Parrot"/>,
  //   <Pet name="Salt" animal="Cat" breed="Mix"/>
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Pepper" animal="Dog" breed="Labs" />,
      <Pet name="Jingles" animal="Bird" breed="Parrot" />,
      <Pet name="Salt" animal="Cat" breed="Mix" /> */}
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
