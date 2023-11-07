import React, { useEffect } from "react";
import Style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "./actions";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.detailReducer.post);
  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  return (
    <main className={Style.main}>
      {console.log(post)}
      {post && (
        <>
          <div className={Style.headerDetail}>
            <div className={Style.rigthHeader}>
              <h2>{post?.title}</h2>
              <p>{new Date(post?.date).toLocaleString()}</p>
            </div>
            <p>{post?.author}</p>
          </div>
          <div className={Style.imgDetailWrap}>
            <img
              className={Style.imgDetail}
              src={post?.imageUrl}
              alt={post?.title}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post?.description }} />
        </>
      )}
    </main>
  );
};

export default DetailPage;
