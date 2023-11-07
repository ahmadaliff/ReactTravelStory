import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import { Button, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "./actions";
import { useNavigate } from "react-router-dom";
import AlertComp from "../../components/Alert";
const NewJourney = () => {
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState({ err: [], succ: [] });
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const user = useSelector((state) => state.loginReducer.dataUser);
  const [data, setData] = useState({
    title: "",
    imageUrl: "",
    shortDescription: "",
    description: "",
    userId: user?.id,
    author: user?.fullname,
  });
  const [validate, setValidate] = useState({
    title: null,
    imageUrl: null,
    shortDescription: null,
    description: null,
  });
  useEffect(() => {
    !isLogin && navigate("/login");
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    handleValidate(e);
  };
  const handleValidate = (e) => {
    e.target.value === ""
      ? setValidate({
          ...validate,
          [e.target.name]: `${e.target.name} is Required`,
        })
      : setValidate({
          ...validate,
          [e.target.name]: null,
        });
  };
  const isValidated = () => {
    return (
      validate.title == null &&
      validate.imageUrl == null &&
      validate.shortDescription == null &&
      validate.description == null
    );
  };
  const callbackAddPost = (status) => {
    if (status?.status === 201) {
      setMsg({
        ...msg,
        succ: [...msg.succ, status.message],
      });
    } else {
      setMsg({
        ...msg,
        err: [...msg.err, status?.message],
      });
    }
    setIsloading(false);
    setTimeout(() => {
      setMsg({ err: [], succ: [] });
      status?.status === 201 && navigate("/");
    }, 1500);
  };
  return (
    <main className={Style.main}>
      <h2 className={Style.pageHeader}>New Journey</h2>
      <form
        className={Style.form}
        onSubmit={(e) => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          e.preventDefault();
          setIsloading(true);
          dispatch(createPost(data, callbackAddPost));
        }}
      >
        <label htmlFor="title" className={Style.FormLabel}>
          Title
        </label>
        <TextField
          label="title"
          name="title"
          variant="outlined"
          fullWidth
          error={validate.title != null}
          onChange={handleChange}
          helperText={validate?.title}
          required
        />
        <label htmlFor="imageUrl" className={Style.FormLabel}>
          Image Url
        </label>
        <TextField
          label="Image Url"
          name="imageUrl"
          variant="outlined"
          fullWidth
          error={validate.imageUrl != null}
          onChange={handleChange}
          helperText={validate?.imageUrl}
          required
        />
        <label htmlFor="shortDescription" className={Style.FormLabel}>
          Short Description
        </label>

        <TextField
          label="Short Description"
          name="shortDescription"
          className={Style.textarea}
          variant="outlined"
          fullWidth
          multiline
          minRows={2}
          maxRows={4}
          error={validate.shortDescription != null}
          onChange={handleChange}
          helperText={validate?.shortDescription}
          required
        />
        <label htmlFor="description" className={Style.FormLabel}>
          Description
        </label>
        <ReactQuill
          onChange={(e) => setData({ ...data, description: e })}
          className={`${Style.quill} ${
            validate?.description == null && Style.Error
          }`}
        />
        <Button
          className={Style.loginButton}
          variant="contained"
          fullWidth
          type="submit"
          disabled={!isValidated() || isLoading}
        >
          Add Post
        </Button>
      </form>
      <AlertComp msg={msg} />
    </main>
  );
};

export default NewJourney;
