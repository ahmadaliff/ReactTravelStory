import React, { useState } from "react";
import Style from "./style.module.scss";
import { Button, Card, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, setLogin } from "./actions";
import AlertComp from "../../components/Alert";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState({ err: [], succ: [] });
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    fullname: null,
    email: null,
    password: null,
  });
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
      : e.target.value.length < 6 && e.target.name === "password"
      ? setValidate({
          ...validate,
          [e.target.name]: "Password Minimum 6 char",
        })
      : setValidate({
          ...validate,
          [e.target.name]: null,
        });
  };
  const isValidated = () => {
    return (
      validate?.email == null &&
      validate?.password == null &&
      validate?.fullname == null
    );
  };
  const callbackLogin = (status) => {
    if (status?.status === 200) {
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
      status?.status === 200 && navigate("/");
    }, 1500);
  };
  return (
    <main className={Style.main}>
      <Card className={Style.LoginCard}>
        <h3>Login</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsloading(true);
            dispatch(loginUser(data, callbackLogin));
          }}
          className={Style.Form}
        >
          <label htmlFor="email" className={Style.FormLabel}>
            Email
          </label>
          <TextField
            label="Email"
            name="email"
            variant="filled"
            fullWidth
            error={validate.email != null}
            onChange={handleChange}
            helperText={validate?.email}
          />
          <label htmlFor="password" className={Style.FormLabel}>
            Password
          </label>
          <TextField
            label="Password"
            name="password"
            variant="filled"
            type="password"
            fullWidth
            error={validate.password != null}
            onChange={handleChange}
            helperText={validate?.password}
          />
          <Button
            className={Style.loginButton}
            variant="contained"
            fullWidth
            disabled={!isValidated() || isLoading}
            type="submit"
          >
            Login
          </Button>
        </form>
        <p className={Style.dontAccount}>
          Don't have an account? <Link to={"/register"}>Klik Here</Link>
        </p>
      </Card>
      <AlertComp msg={msg} />
    </main>
  );
};

export default LoginPage;
