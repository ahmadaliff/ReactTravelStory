import { CREATE_POST } from "./constants";
export const createPost = (post, callback) => ({
  type: CREATE_POST,
  post,
  callback,
});
