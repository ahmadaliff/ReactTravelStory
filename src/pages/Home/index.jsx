import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import headerImg from "../../assets/headerImg.png";
import { Button, TextField } from "@mui/material";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "./actions";
import { getAllPostBookmark } from "../Bookmark/actions";
const HomePage = () => {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const dispacth = useDispatch();
  const posts = useSelector((state) => state.homeReducer.posts);
  const user = useSelector((state) => state.loginReducer.dataUser);
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  useEffect(() => {
    dispacth(getAllPost());
    dispacth(getAllPostBookmark(user?.id));
  }, []);

  return (
    <main className={`${Style.main} ${isLogin && Style.displayHidden}`}>
      <header>
        <div className={Style.imgWrap} />
        <img src={headerImg} className={Style.headerImg} />
        <div className={Style.headerText}>
          <h2>
            The Journey
            <br /> you ever dreamed of.
          </h2>
          <p>
            We made a tool so you can easily keep & share your travel memories.
            But there is a lot more
          </p>
        </div>
      </header>
      <h2 className={Style.pageHeader}>Journey</h2>
      <div className={Style.searchWrap}>
        <TextField
          label="Find Journey"
          fullWidth
          onChange={(e) => setTempSearch(e.target.value)}
        />
        <Button variant="contained" onClick={() => setSearch(tempSearch)}>
          Search
        </Button>
      </div>
      <div className={Style.CardGrid}>
        {posts
          ?.filter((val) => val?.title?.includes(search))
          .map((val, key) => (
            <PostCard data={val} key={key} />
          ))}
      </div>
    </main>
  );
};

export default HomePage;
