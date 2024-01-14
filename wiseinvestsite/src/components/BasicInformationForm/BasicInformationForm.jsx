import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { ValidationError } from "yup";

// config
import { FormValidations } from "../../_config/yupconfig";

// components
import Input from "../input/Input";
import Button from "../Button/Button";

// Estilos
import "./BasicInformation.css";

export const BasicInformationForm = props => {
    const initialForm = {
        nameUser: props.logged ? "Vinicius De Morais" : "",
        emailUser: props.logged ? "vinicius@wiseinvest.com" : "",
        passwordUser: "",
        confirmPasswordUser: "",
        dtBirth: props.logged ? "1987-03-30" : "",
        typePerson: "F",
        nationalIdentifierUser: props.logged ? "12345678909" : "",
    };

    const [form, setForm] = useState(initialForm);
    const [isEnable, setIsEnabled] = useState(props.enabled);
    const [isVisible] = useState(!props.logged);
    const [errors, setErrors] = useState({});

    const validate = async () => {
        try {
            await FormValidations.validate(form, { abortEarly: false });
            setErrors({});
        } catch (e) {
            if (e instanceof ValidationError) {
                const errors = {};
                e.inner.forEach(key => {
                    errors[key.path] = key.message;
                });
                setErrors(errors);
            }
        }
    };

    const setInput = newValue => {
        setForm(form => ({ ...form, ...newValue }));
    };

    useEffect(() => {
        // eslint-disable-next-line
        validate();
    }, [form]);

    const handlerClickCancel = () => {
        setIsEnabled(true);
        setForm(initialForm);
    };

    const handlerClickEdit = e => {
        e.preventDefault();
        setIsEnabled(false);
    };

    const handlerClickSubmit = e => {
        e.preventDefault();

        console.log(form);
        // tratar typePerson aqui
    };

    return (
        <div className='card basicInformationContainer'>
            <h1>
                {props.logged === false ? "Registre-se" : "Informações Basicas"}
            </h1>
            <Form method='post'>
                {props.logged === false ? (
                    <Input
                        label={"Nome: "}
                        name='nameUser'
                        disabled={isEnable}
                        type='text'
                        onChange={e => setInput({ nameUser: e.target.value })}
                        error={errors.nameUser}
                    />
                ) : (
                    <Input
                        placeholder={"Nome: "}
                        label={"Nome: "}
                        name='nameUser'
                        value={form.nameUser}
                        disabled={isEnable}
                        type='text'
                        onChange={e => setInput({ nameUser: e.target.value })}
                        error={errors.nameUser}
                    />
                )}

                {props.logged === false ? (
                    <Input
                        label={"E-mail: "}
                        name='emailUser'
                        disabled={isEnable}
                        type='email'
                        onChange={e => setInput({ emailUser: e.target.value })}
                        error={errors.emailUser}
                    />
                ) : (
                    <Input
                        placeholder={"E-mail: "}
                        label={"E-mail: "}
                        value={form.emailUser}
                        id='emailUser'
                        name='emailUser'
                        disabled={isEnable}
                        type='email'
                        onChange={e => setInput({ emailUser: e.target.value })}
                        error={errors.emailUser}
                    />
                )}

                {
                    props.logged === false ? (
                        <>
                            <Input
                                label={"Senha:"}
                                autoComplete='false'
                                name='passwordUser'
                                disabled={isEnable}
                                type='password'
                                onChange={e =>
                                    setInput({
                                        passwordUser: e.target.value,
                                    })
                                }
                                error={errors.passwordUser}
                            />

                            <Input
                                label={"Confirmar Senha: "}
                                autoComplete='false'
                                name='confirmPasswordUser'
                                disabled={isEnable}
                                type='password'
                                onChange={e =>
                                    setInput({
                                        confirmPasswordUser: e.target.value,
                                    })
                                }
                                error={errors.confirmPasswordUser}
                            />
                        </>
                    ) : (
                        ""
                    )
                }

                {props.logged === false ? (
                    <Input
                        label={"Data de Nascimento: "}
                        id='dtBirth'
                        name='dtBirth'
                        type='date'
                        onChange={e => setInput({ dtBirth: e.target.value })}
                        error={errors.dtBirth}
                    />
                ) : (
                    <Input
                        label={"Data de Nascimento: "}
                        value={form.dtBirth}
                        id='dtBirth'
                        name='dtBirth'
                        disabled={isEnable}
                        type='date'
                        onChange={e => setInput({ dtBirth: e.target.value })}
                        error={errors.dtBirth}
                        hidden={isVisible}
                    />
                )}

                {props.logged === false ? (
                    <Input
                        label={form.typePerson === "F" ? "CPF: " : "CNPJ: "}
                        value={form.nationalIdentifierUser}
                        name='nationalIdentifierUser'
                        type='text'
                        onChange={e =>
                            setInput({ nationalIdentifierUser: e.target.value })
                        }
                        error={errors.nationalIdentifierUser}
                    />
                ) : (
                    <Input
                        label={form.typePerson === "F" ? "CPF: " : "CNPJ: "}
                        value={form.nationalIdentifierUser}
                        name='nationalIdentifierUser'
                        disabled={isEnable}
                        type='text'
                        onChange={e =>
                            setInput({ nationalIdentifierUser: e.target.value })
                        }
                        error={errors.nationalIdentifierUser}
                        hidden={isVisible}
                    />
                )}

                <div className='buttonsControlInfoBasic'>
                    <Button
                        typeStyle={"btn"}
                        hidden={isVisible}
                        disabled={isEnable}
                        onClick={handlerClickCancel}
                    >
                        Cancelar
                    </Button>
                    {isEnable === true ? (
                        <Button
                            typeStyle={"btn"}
                            type='button'
                            onClick={handlerClickEdit}
                        >
                            Editar
                        </Button>
                    ) : (
                        <Button
                            typeStyle={"btn-success"}
                            type='submit'
                            onClick={handlerClickSubmit}
                        >
                            Registrar-se
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};
