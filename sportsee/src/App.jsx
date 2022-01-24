import Header from "./components/Header"
import Home from "./pages/home/home"
import SideMenu from "./components/SideMenu"
import index from "./index.css"



export default function App() {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <SideMenu></SideMenu>
        <Home></Home>
      </div>
    </div>
  );
}