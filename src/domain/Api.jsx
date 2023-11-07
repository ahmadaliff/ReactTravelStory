import axios from "axios";

const pathUrl = {
  posts: "posts",
  users: "users",
  bookmarks: "bookmarks",
};
export const callAPI = async (
  endpoint /*default val*/,
  method = "GET",
  headers = {},
  data
) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const option = {
    baseURL: BASE_URL,
    method: method,
    url: endpoint,
    headers: headers,
    data,
  };
  const response = await axios(option);
  return response?.data;
};
// USER
export const createUser = (dataUser) => {
  return callAPI(pathUrl.users, "POST", {}, dataUser);
};
export const getAllUser = () => {
  return callAPI(pathUrl.users, "GET");
};
export const getUserByEmail = (email) => {
  return callAPI(`${pathUrl.users}?email=${email}`, "GET");
};
// POST
export const getAllPost = () => {
  return callAPI(pathUrl.posts, "GET");
};
export const getPostById = (id) => {
  return callAPI(`${pathUrl.posts}?id=${id}`, "GET");
};
export const getPostByAuthorId = (id) => {
  return callAPI(`${pathUrl.posts}?userId=${id}`, "GET");
};
export const createPost = (dataPost) => {
  return callAPI(pathUrl.posts, "POST", {}, dataPost);
};
// bookmark
export const getAllPostBookmarkByid = (id) => {
  return callAPI(`${pathUrl.bookmarks}?bookmarkUserId=${id}`, "GET");
};
export const getAllPostBookmarks = () => {
  return callAPI(`${pathUrl.bookmarks}`, "GET");
};
export const addPostBookmark = (dataPost) => {
  return callAPI(pathUrl.bookmarks, "POST", {}, dataPost);
};
export const deletePostBookmark = (id) => {
  return callAPI(`${pathUrl.bookmarks}/${id}`, "DELETE");
};
export const checkIsBookmark = (data, id) => {
  return callAPI(
    `${pathUrl.bookmarks}?postId=${data.id}&bookmarkUserId=${id}`,
    "GET"
  );
};
