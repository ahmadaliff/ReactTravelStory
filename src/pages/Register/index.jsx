import React, { useState } from "react";
import Style from "./style.module.scss";
import { Box, Button, Card, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "./actions";
import { useNavigate } from "react-router-dom";
import AlertComp from "../../components/Alert";

const RegisterPage = () => {
  const [msg, setMsg] = useState({ err: [], succ: [] });
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const callbackRegister = (status) => {
    console.log(status);
    status?.status === 201
      ? setMsg({
          ...msg,
          succ: [
            ...msg.succ,
            `User created by fullname : ${status?.response?.fullname}`,
          ],
        })
      : setMsg({
          ...msg,
          err: [...msg.err, status?.message],
        });
    setIsloading(false);
    setTimeout(() => {
      setMsg({ err: [], succ: [] });
      status?.status === 201 && navigate("/login");
    }, 1500);
  };
  return (
    <main className={Style.main}>
      <Card className={Style.registerCard}>
        <h3>Register</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsloading(true);
            dispatch(createUser(data, callbackRegister));
          }}
          className={Style.Form}
        >
          <label htmlFor="fullname" className={Style.FormLabel}>
            Fullname
          </label>
          <TextField
            label="Fullname"
            name="fullname"
            variant="filled"
            fullWidth
            error={validate.fullname != null}
            onChange={handleChange}
            helperText={validate?.fullname}
          />
          <label htmlFor="email" className={Style.FormLabel}>
            Email
          </label>
          <TextField
            label="Email"
            name="email"
            type="email"
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
            className={Style.registerButton}
            variant="contained"
            fullWidth
            disabled={!isValidated() || isLoading}
            type="submit"
          >
            Register
          </Button>
        </form>
      </Card>
      <AlertComp msg={msg} />
    </main>
  );
};

export default RegisterPage;
