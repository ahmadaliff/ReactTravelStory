import React from "react";
import Style from "./style.module.scss";
import { Card, MenuItem } from "@mui/material";
import {
  PermIdentity,
  BookmarkBorder,
  Logout,
  HistoryEdu,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../pages/Login/actions";
const DropdownComp = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  return (
    <Card className={`${Style.dropDownNav} ${!open && Style.displayNone}`}>
      <Link to={"/profile"} onClick={handleClose}>
        <MenuItem className={Style.profileButton}>
          <PermIdentity />
          Profile
        </MenuItem>
      </Link>
      <Link to={"/add"} onClick={handleClose}>
        <MenuItem className={Style.addButton}>
          <HistoryEdu />
          New Journey
        </MenuItem>
      </Link>
      <Link to={"/bookmark"} onClick={handleClose}>
        <MenuItem className={Style.bookmarkButton}>
          <BookmarkBorder />
          Bookmark
        </MenuItem>
      </Link>
      <Link
        onClick={() => {
          dispatch(LogoutUser);
        }}
        to={"/"}
      >
        <MenuItem className={Style.logoutButton}>
          <Logout />
          Logout
        </MenuItem>
      </Link>

      <div className={Style.triangle} />
    </Card>
  );
};

export default DropdownComp;
