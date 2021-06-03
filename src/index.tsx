import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("index")
);

//babel - code transpiling
//react - view library / react-dom: to access dom (render root node)
//webpack - bundle app
//tailwind - inline css
//webpack-dev-server
//typescript and aux @types
//eslint
//fork-ts-checker-webpack-plugin - enable the Webpack process to type check the code
//eslint-webpack-plugin - webpack will inform about lint errors
//clean-webpack-plugin - will clear out the build folder at the start of the bundling process