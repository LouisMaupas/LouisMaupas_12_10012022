import Header from "./components/Header"
import Home from "./pages/home/home"
import SideMenu from "./components/SideMenu"
import index from "./index.css"
import styled from "styled-components"


// styled-component
const ContainerLabel = styled.div`
  background: rgb(240,248,255);
  min-width: 1024px;
  min-height: 700px
`


export default function App() {
  return (
    <ContainerLabel>
      <Header></Header>
      <div className="d-flex">
        <SideMenu></SideMenu>
        <Home></Home>
      </div>
    </ContainerLabel>
  );
}