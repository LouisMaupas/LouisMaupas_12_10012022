// React
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <p>404</p>
          </main>
        }
      />
      <Route
        path="/user/*"
        element={
          <main>
            <p>404</p>
          </main>
        }
      />
      <Route path="/user/:id" element={<App />} />
      <Route
        path="/user/:id/average-sessions"
        element={<App access="average-sessions" />}
      />
      <Route path="/user/:id/key-data" element={<App access="key-data" />} />
      <Route
        path="/user/:id/activities"
        element={<App access="activities" />}
      />
      <Route
        path="/user/:id/today-score"
        element={<App access="today-score" />}
      />
      <Route path="/user/:id/activity" element={<App access="activity" />} />
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
