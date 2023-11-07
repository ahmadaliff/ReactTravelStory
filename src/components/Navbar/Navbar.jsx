import React, { useState } from "react";
import Style from "./style.module.scss";
import logoImg from "../../assets/logo.png";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import DropdownComp from "./DropdownComp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={isLogin ? "" : Style.navbarComp}>
      <div>
        <img
          src={logoImg}
          alt="The Journey Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={Style.navRigth}>
        {isLogin ? (
          <div className={Style.profileDropdown}>
            <DropdownComp open={isOpen} handleClose={() => setIsOpen(false)} />
            <Avatar
              onClick={() => setIsOpen(!isOpen)}
              className={Style.Avatar}
              src="https://source.unsplash.com/500x400/?avatar"
            />
          </div>
        ) : (
          <>
            <Button
              variant="outlined"
              className={Style.loginButton}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button variant="contained" onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
