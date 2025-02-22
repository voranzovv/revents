import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "semantic-ui-react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import { configureStore } from './features/store/configureStore';

Sentry.init({
    dsn: "https://1f8e44542b1948f5be2d9ad2e15edf6f@sentry.io/1781488"
});

const store = configureStore();
console.log(store.getState());
const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
