import React from "react";
import { useStyles } from "./AuthStyles";
import { TextField, Button } from "@material-ui/core";

type PropsType = {
  email: "string";
  password: "string";
  handelAuthInputs: (inputName: string, value: string) => void;
  login: (e: Event) => void;
};

const Auth: React.FC<PropsType> = (props: any) => {
  const classes = useStyles();
  return (
    <form onSubmit={props.login} className={classes.container}>
      <TextField
        value={props.email}
        className={classes.root}
        placeholder="email"
        onChange={(e) => {
          props.handelAuthInputs("email", e.target.value);
        }}
      />
      <TextField
        value={props.password}
        className={classes.root}
        placeholder="password"
        onChange={(e) => {
          props.handelAuthInputs("password", e.target.value);
        }}
      />

      <Button type="submit" variant="contained" color="primary">
        Войти
      </Button>
    </form>
  );
};

export { Auth };
