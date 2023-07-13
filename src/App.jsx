import { Outlet } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <>
      <div className="container">
        <MenuBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
