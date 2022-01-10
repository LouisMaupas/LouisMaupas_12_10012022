import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "../src/components/expenses";
import Invoices from "../src/components/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);