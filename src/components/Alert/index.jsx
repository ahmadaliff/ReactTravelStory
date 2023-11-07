import { Alert } from "@mui/material";
import React from "react";
import Style from "./style.module.scss";
const AlertComp = ({ msg }) => {
  return (
    <div className={Style.AlertComp}>
      {msg?.succ?.map((val, key) => (
        <Alert severity="success" variant="filled" key={key}>
          {val}
        </Alert>
      ))}
      {msg?.err?.map((val, key) => (
        <Alert severity="error" variant="filled" key={key}>
          {val}
        </Alert>
      ))}
    </div>
  );
};

export default AlertComp;
