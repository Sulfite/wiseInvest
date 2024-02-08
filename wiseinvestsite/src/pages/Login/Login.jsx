import { useState } from "react";
import { Await, Form, Link, useNavigate } from "react-router-dom";

import instance from "../../_config/axiosConfig";

import "./login.css";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";

import { BsGoogle, BsFacebook } from "react-icons/bs";
import { ModalError } from "../../components/ModalError/ModalError";

export const Login = () => {
    const [nameUser, setNameUser] = useState();
    const [passwordUser, setPasswordUser] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [reqError, setReqError] = useState({title: '', Message: ''});

    const nav = useNavigate();
    
    const openModal = () => {
        setIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    }

    const reqLogin = async (nameUser, passUser) => {
        let output = await instance
            .post(`/login`, {
                user: nameUser,
                password: passUser,
            })
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    console.log(error.response.data);

                    return error.response.data;
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                }
            });
        return output;
    };

    const handlerClickLogin = async () => {
        let returnLogin = await reqLogin(nameUser, passwordUser);

        if (returnLogin.authorized === true) {
            localStorage.setItem('token', returnLogin.token);
            nav('/dashboard');
        } else {
            setReqError({title: returnLogin.title, Message: returnLogin.Message});
            setIsOpen(true);
        }
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

            <ModalError title={reqError.title} mensagem={reqError.Message} openModal={modalIsOpen} closeModal={closeModal} />
        </>
    );
};
