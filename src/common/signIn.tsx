import React from "react";
import Input_eye from "../UI/input_eye";
import { Input } from "../UI/input";
import styles from "../css/common.css/signIn.module.scss";
import Link from "../UI/link";


export const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signIn__item_reg}>
        <p className={styles.header}>Sign in</p>
        <div className={styles.signIn__login}>
          <a>Login</a>
            <Input />
        </div>
        <div className={styles.signIn__password}>
          <a>Password</a>
            <Input_eye />
        </div>
        <button>Sign in</button>
        <div>
          Not a member yet?<Link to="/signin">Sign in</Link>
        </div>
      </div>

      <div className={styles.signIn__item_img}>
        <img src='\assets\img\Group (1).png' alt='img'/>
      </div>
    </div>
  );
};
