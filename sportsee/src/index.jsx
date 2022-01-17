// React
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// App
import App from "./App";
import {UserData} from "./utils/context/index";

const rootElement = document.getElementById("root");
render(
  // <UserData>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/user/:id' element={<App/>}></Route>
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
  // </UserData>,
  rootElement
);