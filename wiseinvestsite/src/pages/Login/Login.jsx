import { useState } from "react";
import { Form, Link } from "react-router-dom";

import instance from "../../_config/axiosConfig";

import "./login.css";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

import { BsGoogle, BsFacebook } from "react-icons/bs";

export const Login = () => {
    const [nameUser, setNameUser] = useState();
    const [passwordUser, setPasswordUser] = useState();
    

    const reqLogin = async (nameUser, passUser) => {
        let output = await instance
            .post(`/login`, {
              'user': nameUser,
              'password': passUser
            })
            .then((response) => {
                return response.data;
            });

        return output;
    };

    const handlerClickLogin = () => {
        console.log({ nameUser, passwordUser });

        let teste = reqLogin(nameUser, passwordUser);

        console.log(teste);
    };

    return (
        <>
            <div className='container containerLogin'>
                <div className='card'>
                    <h1>Wise Invest</h1>
                    <div className='containerFormLogin'>
                        <Form method='post'>
                            <Input
                                name='nameUser'
                                type='text'
                                placeholder='E-mail/User'
                                onChange={(e) => setNameUser(e.target.value)}
                            />
                            <Input
                                name='passwordUser'
                                type='password'
                                placeholder='Password'
                                onChange={(e) =>
                                    setPasswordUser(e.target.value)
                                }
                            />

                            <Button
                                className='btn'
                                // type="submit"
                                type='button'
                                onClick={handlerClickLogin}
                            >
                                Login
                            </Button>
                        </Form>
                    </div>
                    <div className='containerRegister'>
                        <Link
                            to={"/register"}
                            id='register'
                        >
                            <Button className='btn'>Register</Button>
                        </Link>
                        <Button
                            id='rlGoogle'
                            className='btn'
                        >
                            <BsGoogle /> Google
                        </Button>
                        <Button
                            id='rlFacebook'
                            className='btn'
                        >
                            <BsFacebook />
                            Facebook
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
