import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApplicationRoutes } from "@/config/variables";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ApplicationRoutes.main} element={<>main page</>} />
      </Routes>
    </Router>
  );
};
