import { Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import Style from "./style.module.scss";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmark,
  deleteFromBookmark,
} from "../../pages/Bookmark/actions";
const PostCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer.dataUser);
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmarks);
  const bookmark = bookmarks?.filter((val) => {
    if (data.postId) {
      return val.bookmarkUserId === user.id && val.postId === data.postId;
    } else {
      return val.bookmarkUserId === user.id && val.postId === data.id;
    }
  });
  const isBookmark = bookmark.length > 0;
  return (
    <div className={Style.CardWrap}>
      <Card
        onClick={() =>
          navigate(`/detail/${data?.postId ? data?.postId : data?.id}`)
        }
      >
        <CardMedia
          className={Style.CardImg}
          image={data?.imageUrl}
          title={data?.title}
        />
        <CardContent className={Style.CardContent}>
          <h3>{data?.title}</h3>
          <p className={Style.dateAuthor}>
            {new Date(data?.date).toLocaleString()}, {data?.author}
          </p>
          <p className={Style.shortDescription}>{data?.shortDescription}</p>
        </CardContent>
      </Card>
      <div
        className={Style.bookmarkButton}
        onClick={() => {
          if (isLogin) {
            isBookmark
              ? dispatch(deleteFromBookmark(bookmark[0]?.id))
              : dispatch(addToBookmark(data, user?.id));
          } else {
            navigate("/login");
          }
        }}
      >
        {isBookmark ? <Bookmark /> : <BookmarkBorder />}
      </div>
    </div>
  );
};

export default PostCard;
