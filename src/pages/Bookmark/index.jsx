import React from "react";
import Style from "./style.module.scss";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
const BookmarkPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.bookmarkReducer.bookmarks);
  const user = useSelector((state) => state.loginReducer.dataUser);
  return (
    <main className={Style.main}>
      <h2 className={Style.pageHeader}>Bookmark</h2>
      <div className={Style.CardGrid}>
        {posts?.map((val, key) => (
          <PostCard data={val} key={key} />
        ))}
      </div>
    </main>
  );
};

export default BookmarkPage;
