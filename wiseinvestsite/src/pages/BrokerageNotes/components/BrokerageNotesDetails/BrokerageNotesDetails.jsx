import { useState } from "react";
import { formatDate, formatDollarSign } from "../../../../_assests/js/Ultils";
import { currency, local } from "../../../../_config/globalVariable";
import { customStyles } from "../../../../_config/custonStylesModal";

import Button from "../../../../components/Button/Button";
import { ModalComponent } from "../../../../components/Modal/ModalComponent";

import "./brokerageNotesDetails.css";
import { IoMdClose } from "react-icons/io";

export const BrokerageNotesDetails = ({ open, close, idBn }) => {
    const [info, setInfo] = useState({
        Numero_Envio: 2,
        TP_Envio: "L",
        DT_Envio: "2023-01-30",
        actives: [
            { stonk: "BHIA3", amount: 50, unitPrice: 10.02 },
            { stonk: "BCFF11", amount: 50, unitPrice: 8.8 },
            { stonk: "ITSA4", amount: 50, unitPrice: 10.05 },
        ],
    });

    return (
        <ModalComponent
            open={open}
            close={close}
            customStyles={customStyles}
        >
            <div className='containerBnDetails'>
                <div className='containerModalTitle'>
                    <h1 className='logo'>
                        {info.TP_Envio === "L" ? "Lote" : "Unitário"}
                    </h1>
                    <Button
                        className='nBtn'
                        onClick={close}
                    >
                        <IoMdClose />
                    </Button>
                </div>

                <div className='containerModalBody'>
                    <h2>Data de envio: {formatDate(info.DT_Envio)}</h2>

                    <table>
                        <tr>
                            <th>Cod. Ativo</th>
                            <th>Quantidade</th>
                            <th>Preço Unitário</th>
                            <th>Valor Total</th>
                        </tr>

                        {info.actives.map((x) => (
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
                        ))}
                    </table>
                </div>
            </div>
        </ModalComponent>
    );
};
