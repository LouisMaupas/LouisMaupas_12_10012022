import Header from "./components/Header"
import SideMenu from "./components/SideMenu"
import Welcome from "./components/Welcome";
import index from "./index.css"



export default function App() {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <SideMenu></SideMenu>
        <div>
          <Welcome></Welcome>
        </div>
      </div>
    </div>
  );
}