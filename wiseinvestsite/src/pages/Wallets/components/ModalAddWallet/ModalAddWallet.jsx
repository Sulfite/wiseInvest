import { useState, useEffect } from "react";
import { FormValidations } from "../../../../_config/yupconfig";
import { Form } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { ValidationError } from "yup";

import { ModalComponent } from "../../../../components/Modal/ModalComponent";

import Input from "../../../../components/input/Input";
import Button from "../../../../components/Button/Button";

import "./modalAddWallet.css";

export const ModalAddWallet = ({ open, close }) => {

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const initialForm = {
        titleWallet: "",
        descriptionWallet: "",
    };

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validate = async () => {
        try {
            await FormValidations.validate(form, { abortEarly: false });
            setErrors({});
        } catch (e) {
            if (e instanceof ValidationError) {
                const errors = {};
                e.inner.forEach((key) => {
                    errors[key.path] = key.message;
                });
                setErrors(errors);
            }
        }
    };

    const setInput = (newValue) => {
        setForm((form) => ({ ...form, ...newValue }));
    };

    useEffect(() => {
        // eslint-disable-next-line
        validate();
    }, [form]);

    const handlerClickSalvar = () => {
        console.log("salvou");
    }

    return (
        <ModalComponent
            open={open}
            close={close}
            customStyles={customStyles}
        >
            <div className='containerModalAdd'>
                <div className='containerTitle'>
                    <h1 className="logo">Adicionar Carteira</h1>
                    <Button className="nBtn" onClick={close}>
                        <IoMdClose />
                    </Button>
                </div>
                <div className='containerFormModalAdd'>
                    <Form>
                        <div className='titleWallet'>
                            <Input
                                alt={"Nome da Carteira: "}
                                label={"Nome da Carteira: "}
                                name='titleWallet'
                                type='text'
                                onChange={(e) =>
                                    setInput({ titleWallet: e.target.value })
                                }
                                error={errors.titleWallet}
                            />
                        </div>
                        <div className='descriptionWallet'>
                            <Input
                                alt={"Descrição da Carteira: "}
                                label={"Descrição da Carteira: "}
                                name='descriptionWallet'
                                type='text'
                                onChange={(e) =>
                                    setInput({
                                        descriptionWallet: e.target.value,
                                    })
                                }
                                error={errors.descriptionWallet}
                            />
                        </div>
                        <div className='buttonsControlWallet'>
                            <Button className='btn' onClick={close}>Cancelar</Button>
                            <Button className='btn-success' onClick={() => {
                                handlerClickSalvar();
                                close();
                            }}>Salvar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </ModalComponent>
    );
};
