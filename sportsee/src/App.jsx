import Header from "./components/Header"
import SideMenu from "./components/SideMenu"
import index from "./index.css"



export default function App() {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <SideMenu></SideMenu>
        <div>MAIN DISPLAY</div>
      </div>
    </div>
  );
}