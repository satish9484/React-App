import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStorage/store";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./features/components/ErrorBoundary";
import { AuthContextProvider } from "./features/context/AuthContextProvider";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { productAPI } from "./features/product/ProductAPI";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <ErrorBoundary>
                <AuthContextProvider>
                  <Provider store={store}>
                    {/* <ApiProvider api={productAPI}>  </ApiProvider> */}
                    <App />
                  </Provider>
                </AuthContextProvider>
              </ErrorBoundary>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
