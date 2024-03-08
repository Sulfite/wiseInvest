import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ValidationError } from "yup";

// config
import { FormValidations } from "../../_config/yupconfig";

// Req
import { reqGetUser, reqInsertUser, reqPutUser } from "../../api/userApi";

// components
import Input from "../input/Input";
import Button from "../Button/Button";

// Estilos
import "./BasicInformation.css";
import {
    cnpjMask,
    cpfMask,
    formatDate,
    isNullOrEmpty,
    removeMaskNationalIdentifier,
} from "../../_assests/js/Ultils";

const initialForm = {
    nameUser: "",
    emailUser: "",
    passwordUser: "",
    confirmPasswordUser: "",
    dtBirth: "",
    typePerson: "",
    nationalIdentifierUser: "",
};

export const BasicInformationForm = (props) => {
    const [form, setForm] = useState(initialForm);
    const [isEnable, setIsEnabled] = useState(props.enabled);
    const [isVisible] = useState(!props.logged);
    const [errors, setErrors] = useState({});

    const nav = useNavigate();

    useEffect(() => {
        if (props.logged) {
            const basicInformationUser = reqGetUser();

            basicInformationUser.then((response) => {
                console.log(response);
                if (response.length > 0) {
                    
                    initialForm.nameUser = response.Name_user;
                    initialForm.emailUser = response.Email_user;
                    initialForm.dtBirth = formatDate(response.DT_Birth);
                    initialForm.typePerson = response.ID_Access_Type;
                    initialForm.nationalIdentifierUser = isNullOrEmpty(
                        response.National_Identifier
                    )
                        ? response.National_Identifier
                        : response.National_Identifier.length > 13
                        ? cnpjMask(response.National_Identifier)
                        : cpfMask(response.National_Identifier);
    
                    setForm((form) => ({ ...form, ...initialForm }));
                }
            });
        } else {
            initialForm.nameUser = "";
            initialForm.emailUser = "";
            initialForm.passwordUser = "";
            initialForm.confirmPasswordUser = "";
            initialForm.dtBirth = "";
            initialForm.typePerson = "";
            initialForm.nationalIdentifierUser = "";
        }
    }, []);

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

    const handlerClickCancel = () => {
        setIsEnabled(true);
        setForm(initialForm);
    };

    const handlerClickEdit = (e) => {
        e.preventDefault();
        setIsEnabled(false);
    };

    const handlerClickSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        if (props.logged) {
            const newForm = {
                nameUser: form.nameUser,
                emailUser: form.emailUser,
                dtBirth: form.dtBirth,
                nationalIdentifier: removeMaskNationalIdentifier(
                    form.nationalIdentifierUser
                ),
                typePerson: form.nationalIdentifierUser.length > 11 ? "J" : "F",
            };

            const responsePut = reqPutUser(newForm);

            responsePut.then((response) => {
                console.log(response);
                if (response.length > 1) {
                    setIsEnabled(true);
                }
            });
        } else {
            const responseInsert = reqInsertUser(form);
            responseInsert.then((response) => {
                console.log(response);
                if (response.insert === true) {
                    nav("/");
                }
            });
        }
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
                        onChange={(e) => setInput({ nameUser: e.target.value })}
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
                        onChange={(e) => setInput({ nameUser: e.target.value })}
                        error={errors.nameUser}
                    />
                )}

                {props.logged === false ? (
                    <Input
                        label={"E-mail: "}
                        name='emailUser'
                        disabled={isEnable}
                        type='email'
                        onChange={(e) =>
                            setInput({ emailUser: e.target.value })
                        }
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
                        onChange={(e) =>
                            setInput({ emailUser: e.target.value })
                        }
                        error={errors.emailUser}
                    />
                )}

                {props.logged === false ? (
                    <>
                        <Input
                            label={"Senha:"}
                            autoComplete='false'
                            name='passwordUser'
                            disabled={isEnable}
                            type='password'
                            onChange={(e) =>
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
                            onChange={(e) =>
                                setInput({
                                    confirmPasswordUser: e.target.value,
                                })
                            }
                            error={errors.confirmPasswordUser}
                        />
                    </>
                ) : (
                    ""
                )}

                {props.logged === true ? (
                    <Input
                        label={"Data de Nascimento: "}
                        value={form.dtBirth}
                        id='dtBirth'
                        name='dtBirth'
                        disabled={isEnable}
                        type='date'
                        onChange={(e) => setInput({ dtBirth: e.target.value })}
                        error={errors.dtBirth}
                        hidden={isVisible}
                    />
                ) : (
                    ""
                )}

                {props.logged === true ? (
                    <Input
                        label={form.typePerson === "F" ? "CPF: " : "CNPJ: "}
                        value={form.nationalIdentifierUser}
                        name='nationalIdentifierUser'
                        disabled={isEnable}
                        type='text'
                        onChange={(e) => {
                            if (e.target.value > 11) {
                                let cnpj = cnpjMask(e.target.value);
                                setInput({ nationalIdentifierUser: cnpj });
                            } else {
                                let cpf = cpfMask(e.target.value);
                                setInput({ nationalIdentifierUser: cpf });
                            }
                        }}
                        error={errors.nationalIdentifierUser}
                        hidden={isVisible}
                    />
                ) : (
                    ""
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
                            {props.logged ? "Salvar" : "Registrar-se"}
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};
