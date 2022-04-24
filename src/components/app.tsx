import { Store } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline, Theme } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppRoutes } from "@/routes/app-routes";

export const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};
