import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
