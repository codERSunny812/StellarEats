import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./Components/Context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <ContextProvider>
      <RouterProvider router={AppRouter} />
  </ContextProvider>
    
  </>
);
