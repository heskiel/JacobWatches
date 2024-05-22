import React, { useEffect } from "react";
import "./assets/vendor/css/style.scss";
import "./assets/vendor/css/responsvie.scss";
import "./assets/vendor/css/bootstrap.css";
// import "./assets/vendor/css/style.css";
// import "./assets/vendor/css/responsive.css";
import "./assets/vendor/dist/assets/owl.carousel.css";
import "./assets/vendor/dist/assets/owl.theme.default.min.css";
import { GetRoutes } from "./actions/customFn";
import { Route, Routes } from "react-router-dom";
import RouteArr from "./hooks/GetRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { Master } from "./components";

function App() {
  // Top To Scroll
  const routePath = useLocation();
  const navigate = useNavigate();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Master />
              </div>
            </>
          }
        >
          {GetRoutes(RouteArr)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
