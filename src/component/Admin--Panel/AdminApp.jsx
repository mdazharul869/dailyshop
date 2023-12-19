import { Outlet } from "react-router-dom";
import Foter from "../layout/Footer/Foter";
import Header from "../layout/Header/Header";
import "./AdminApp.scss";
import "./style/dark.scss";

function AdminApp() {


  return (
    <div id="root__Admin">
      <Header />
          <Outlet />
      <Foter />
    </div>
  );
}

export default AdminApp;
