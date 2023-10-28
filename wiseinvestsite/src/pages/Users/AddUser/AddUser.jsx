import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select/Select";
import { FormValidations } from "../../../_config/yupconfig";
import { ValidationError } from "yup";

// import { useContext } from "react";
// import { AddUserContext } from "../context/context";

const initialForm = {
    nameUser: "",
    userPay: "",
    typeUser: "",
};

const typeUser = [
    {id: 1, description: "Master"},
    {id: 2, description: "Analista"},
    {id: 3, description: "Premium"},
    {id: 4, description: "Free"},
];

export const AddUser = () => {
    // const [isAddUser, setIsAddUser] = useContext(AddUserContext);
    
    const [isAddUser, setIsAddUser] = useState(true);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    
    const clickHandlerCancel = () => {
        setIsAddUser(false);
    };

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

    return (
        <div className='card containerAddUser'>
            <Form>
                {/* <span>{isAddUser}</span> */}

                <Input
                    placeholder={"Nome: "}
                    label={"Nome: "}
                    name='nameUser'
                    type='text'
                    onChange={(e) => setInput({ nameUser: e.target.value })}
                    error={errors.nameUser}
                />

                <Select
                    label={"Tipo de Usuário: "}
                    name='typeUser'
                    selectOptions={typeUser}
                    onChange={(e) => setInput({ typeUser: e.target.value })}
                    error={errors.typeUser}
                />

                <Input
                    placeholder={"Pago "}
                    label={"Pago "}
                    name='payUser'
                    type='checkbox'
                    onChange={(e) => setInput({ payUser: e.target.value })}
                    error={errors.payUser}
                />

                <div className='controlButtonAddUser'>
                    <Button
                        className='btn'
                        onClick={clickHandlerCancel}
                    >
                        Cancelar
                    </Button>
                    <Button className='btn-success'>Salvar</Button>
                </div>
            </Form>
        </div>
    );
};
