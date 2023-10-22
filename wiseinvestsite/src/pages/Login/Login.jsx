import { Form, Link } from "react-router-dom";

import { BsGoogle, BsFacebook } from "react-icons/bs";

import "./login.css";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

export const Login = () => {
  return (
    <>
      <div className="container containerLogin">
        <div className="card">
          <h1>Wise Invest</h1>
          <div className="containerFormLogin">
            <Form method="post">
              <Input name="nameUser" type="text" placeholder="E-mail/User" />
              <Input name="passwordUser" type="password" placeholder="Password" />

              <Button className="btn" type="submit">
                Login
              </Button>
            </Form>
          </div>
          <div className="containerRegister">
            <Link to={'/register'} id="register" >
              <Button className="btn">
                Register
              </Button>
            </Link>
            <Button id="rlGoogle" className="btn">
              <BsGoogle /> Google
            </Button>
            <Button id="rlFacebook" className="btn">
              <BsFacebook />
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
