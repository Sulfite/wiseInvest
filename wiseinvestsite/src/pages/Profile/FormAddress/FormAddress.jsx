import { Form } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormValidations } from "../../../_config/yupconfig";
import { ValidationError } from "yup";

import "./formAddress.css"
import Input from "../../../components/input/Input"
import Select from "../../../components/Select/Select"
import Button from "../../../components/Button/Button";

const pais = [
    {id: 1, description: 'Brasil'},
    {id: 2, description: 'Estados Unidos'},
];

const estados = [
    {id: 1, description: 'SP'},
    {id: 2, description: 'RJ'},
];

const cidades = [
    {id: 1, description: 'Tupã'},
    {id: 2, description: 'São Paulo'},
    {id: 3, description: 'Rio de Janeiro'}
];

const initialForm = {

    cdPostalUser: '',
    streetUser: '',
    districtUser: '',
    numberStreetUser: '',
    complementUser: '',
    statesUser: '',
    citytUser: '',
    coutriesUser: ''
};

export const FormAddres = () => {

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

	return(
		<div className="card containerAddress">
            <h1>Endereço</h1>
            <Form action="" method="post">
                <div className='cdPostal'>
                    <Input
                        placeholder={"CEP: "}
                        label={"CEP: "}
                        name='cdPostalUser'
                        type='text'
                        onChange={(e) => setInput({ cdPostalUser: e.target.value })}
                        error={errors.cdPostalUser}
                    />
                </div>

                <div className='coutriesUser'>
                    <Select
                        label={"País: "}
                        name='coutriesUser'
                        selectOptions={pais}
                        onChange={(e) => setInput({ coutriesUser: e.target.value })}
                        error={errors.coutriesUser}
                    />
                </div>

                <div className='statesUser'>
                    <Select
                        label={"Estado: "}
                        name='statesUser'
                        selectOptions={estados}
                        onChange={(e) => setInput({ statesUser: e.target.value })}
                        error={errors.statesUser}
                    />
                </div>

                <div className='citytUser'>
                    <Select
                        label={"Cidade: "}
                        name='citytUser'
                        selectOptions={cidades}
                        onChange={(e) => setInput({ citytUser: e.target.value })}
                        error={errors.citytUser}
                    />
                </div>

                <div className='districtUser'>
                    <Input
                        placeholder={"Bairro: "}
                        label={"Bairro: "}
                        name='districtUser'
                        type='text'
                        onChange={(e) => setInput({ districtUser: e.target.value })}
                        error={errors.districtUser}
                    />
                </div>

                <div className='address'>
                    <Input
                        placeholder={"Endereço: "}
                        label={"Endereço: "}
                        name='streetUser'
                        type='text'
                        onChange={(e) => setInput({ streetUser: e.target.value })}
                        error={errors.streetUser}
                    />
                </div>

                <div className='numberStret'>
                    <Input
                        placeholder={"Número: "}
                        label={"Número: "}
                        name='numberStreetUser'
                        type='text'
                        onChange={(e) => setInput({ numberStreetUser: e.target.value })}
                        error={errors.numberStreetUser}
                    />
                </div>

                <div className='complementUser'>
                    <Input
                        placeholder={"Complemento: "}
                        label={"Complemento: "}
                        name='complementUser'
                        type='text'
                        onChange={(e) => setInput({ complementUser: e.target.value })}
                        error={errors.complementUser}
                    />
                </div>




                <div className='buttonsControlAddres'>
                    <Button
                        typeStyle={"btn"}
                        // onClick={handlerClickCancel}
                    >
                        Cancelar
                    </Button>

                    <Button
                        typeStyle={"btn-success"}
                        type='submit'
                        // onClick={handlerClickSubmit}
                    >
                        Salvar
                    </Button>
                </div>
			</Form>
		</div>
	)
}