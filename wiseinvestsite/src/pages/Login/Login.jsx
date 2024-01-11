import { Form } from "react-router-dom";

import { BsGoogle, BsFacebook } from "react-icons/bs";

import "./login.css";

export const Login = () => {
  return (
    <>
      <div className="container containerLogin">
        <div className="card">
          <h1>Wise Invest</h1>
          <div className="containerFormLogin">
            <Form method="post">
              <input name="user" type="text" placeholder="E-mail/User" />
              <input name="password" type="password" placeholder="Password" />

              <button className="btn" type="submit">
                Login
              </button>
            </Form>
          </div>
          <div className="containerRegister">
            <button id="register" className="btn">
              Register
            </button>
            <button id="rlGoogle" className="btn">
              <BsGoogle /> Google
            </button>
            <button id="rlFacebook" className="btn">
              <BsFacebook />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
