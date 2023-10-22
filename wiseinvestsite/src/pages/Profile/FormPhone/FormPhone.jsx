import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom'

import { FormValidations } from '../../../_config/yupconfig';
import { ValidationError } from 'yup';

import Button from '../../../components/Button/Button'
import Select from '../../../components/Select/Select'

import './formPhone.css'
import Input from '../../../components/input/Input';

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

const tipo = [
    {id: 1, description: 'Residencial'},
    {id: 2, description: 'Celular'}
];

const initialForm = {
    typePhoneUser: '',
    numberPhoneUser: '',
    statesPhoneUser: '',
    cityPhoneUser: '',
    coutriesPhoneUser: ''
};

export const FormPhone = () => {
    
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

    return (
        <div className="card containerPhone">
            <h1>
                Telefone
            </h1>
            <Form  action="" method="post">
                <div>
                    <Select
                        label={"Tipo: "}
                        name='typePhoneUser'
                        selectOptions={tipo}
                        onChange={(e) => setInput({ typePhoneUser: e.target.value })}
                        error={errors.typePhoneUser}
                    />
                </div>
                <div className='coutriesPhoneUser'>
                    <Select
                        label={"País: "}
                        name='coutriesPhoneUser'
                        selectOptions={pais}
                        onChange={(e) => setInput({ coutriesPhoneUser: e.target.value })}
                        error={errors.coutriesPhoneUser}
                    />
                </div>

                <div className='statesPhoneUser'>
                    <Select
                        label={"Estado: "}
                        name='statesPhoneUser'
                        selectOptions={estados}
                        onChange={(e) => setInput({ statesPhoneUser: e.target.value })}
                        error={errors.statesPhoneUser}
                    />
                </div>

                <div className='cityPhonetUser'>
                    <Select
                        label={"Cidade: "}
                        name='cityPhonetUser'
                        selectOptions={cidades}
                        onChange={(e) => setInput({ cityPhonetUser: e.target.value })}
                        error={errors.cityPhonetUser}
                    />
                </div>
                <div>
                    <Input
                        placeholder={"DDD: "}
                        label={"DDD: "}
                        name='dddUser'
                        type='number'
                        onChange={(e) => setInput({ dddUser: e.target.value })}
                        error={errors.dddUser}
                    />
                </div>
                <div>
                <Input
                        placeholder={"Número: "}
                        label={"Número: "}
                        name='phoneNumberUser'
                        type='tel'
                        onChange={(e) => setInput({ phoneNumberUser: e.target.value })}
                        error={errors.phoneNumberUser}
                    />
                </div>
                <div className="buttonsControlPhone">
                    <Button className="btn">
                        Cancelar
                    </Button>
                    <Button className="btn-success">
                        Salvar
                    </Button>
                </div>


            </Form>
        </div>
    )
}