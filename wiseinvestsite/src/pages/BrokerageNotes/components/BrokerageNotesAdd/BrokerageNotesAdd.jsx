import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { ValidationError } from "yup";

import { FormValidations } from "../../../../_config/yupconfig";

import { ModalComponent } from "../../../../components/Modal/ModalComponent";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/Button/Button";

import { customStyles } from "../../../../_config/custonStylesModal";
import "./brokerageNotesAdd.css";
import { formatDollarSign } from "../../../../_assests/js/Ultils";
import { currency, local } from "../../../../_config/globalVariable";

export const BrokerageNotesAdd = ({ open, close, typeSend }) => {
    const initialForm = {
        stock: "",
        amount: 0,
        unitPrice: 0.0,
        totalValue: 0.0,
    };

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [actives, setActives] = useState([]);

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

	const handlerClickBatch = () => {
		console.log(form);
		setActives(form);
	}

    return (
        <ModalComponent
            open={open}
            close={close}
            customStyles={customStyles}
        >
            <Form
                action=''
                method='post'
            >
                <div>
                    <Input
                        placeholder={"Cod. Ativo: "}
                        label={"Cod. Ativo: "}
                        name='stonk'
                        type='text'
                        onChange={(e) => setInput({ stonk: e.target.value })}
                        error={errors.stonk}
                    />
                </div>
                <div>
                    <Input
                        placeholder={"Quantidade: "}
                        label={"Quantidade: "}
                        name='amount'
                        type='number'
                        onChange={(e) => setInput({ amount: e.target.value })}
                        error={errors.amount}
                    />
                </div>
                <div>
                    <Input
                        placeholder={"Preço Unitário: "}
                        label={"Preço Unitário: "}
                        name='unitPrice'
                        type='number'
                        onChange={(e) =>
                            setInput({ unitPrice: e.target.value })
                        }
                        error={errors.unitPrice}
                    />
                </div>
                <div>
                    <Input
                        placeholder={"Valor Total: "}
                        label={"Valor Total: "}
                        name='totalValue'
                        type='number'
                        onChange={(e) =>
                            setInput({ totalValue: e.target.value })
                        }
                        error={errors.totalValue}
                    />
                </div>

                <div className='buttonsControlBn'>
                    <Button className='btn' onClick={close}>Cancelar</Button>
                    {typeSend === "L" ? (
                        <Button onClick={() => handlerClickBatch()} className='btn-success'>Adicionar</Button>
                    ) : (
                        <Button className='btn-success'>Salvar</Button>
                    )}
                </div>
            </Form>

            {typeSend === "L" ? (
                <div>
                    <table>
                        <tr>
                            <th>Cod. Ativo</th>
                            <th>Quantidade</th>
                            <th>Preço Unitário</th>
                            <th>Valor Total</th>
                        </tr>

                        {actives.length > 0
                            ? actives.map((x) => (
                                  <tr>
                                      <td>{x.stonk}</td>
                                      <td>{x.amount}</td>
                                      <td>
                                          {formatDollarSign(
                                              x.unitPrice,
                                              local,
                                              currency
                                          )}
                                      </td>
                                      <td>
                                          {formatDollarSign(
                                              x.unitPrice * x.amount,
                                              local,
                                              currency
                                          )}
                                      </td>
                                  </tr>
                              ))
                            : ""}
                    </table>
                </div>
            ) : (
                ""
            )}
        </ModalComponent>
    );
};
