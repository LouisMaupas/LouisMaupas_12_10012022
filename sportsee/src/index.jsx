// React
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App
import App from "./App";
import DataUsers from "./utils/context/index";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:id" element={<App />}></Route>
      <Route path="/user/:id/:chart" element={<App />}></Route>
      {/* verifier si la variable est bien un mot autorisé sinon 404 ;
       si chart = activity on affiche activity si chart = null on affiche tous les graphiques */}
      <Route
        path="*"
        element={
          <main>
            <p>404</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
