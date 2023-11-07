import React, { useEffect } from "react";
import Style from "./style.module.scss";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostByAuthorId } from "./actions";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const user = useSelector((state) => state.loginReducer.dataUser);
  const posts = useSelector((state) => state.profileReducer.posts);
  useEffect(() => {
    !isLogin && navigate("/login");
    dispatch(getPostByAuthorId(user.id));
  }, []);
  return (
    <main className={Style.main}>
      <h2 className={Style.pageHeader}>Profile</h2>
      <div className={Style.ProfileWrap}>
        <Avatar
          onClick={() => setIsOpen(!isOpen)}
          className={Style.Avatar}
          src="https://source.unsplash.com/500x400/?avatar"
        />
        <h3>{user?.fullname}</h3>
        <p className={Style.textEmail}>{user?.email}</p>
        <Button variant="contained" onClick={() => navigate("/add")}>
          add new post
        </Button>
      </div>
      <div className={Style.CardGrid}>
        {posts?.map((val, key) => (
          <PostCard data={val} key={key} />
        ))}
      </div>
    </main>
  );
};

export default ProfilePage;
