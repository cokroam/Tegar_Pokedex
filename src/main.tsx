import "./index.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

import { persistor, store } from "./store/store.ts";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ToastContainer position="top-center" autoClose={5000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
