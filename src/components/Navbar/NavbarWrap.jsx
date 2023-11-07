import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const NavbarWrap = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarWrap;
