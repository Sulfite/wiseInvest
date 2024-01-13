import { useState } from "react";
import Button from "../../components/Button/Button";

import "./brokerageNotes.css";
import { BrokerageNotesDetails } from "./components/BrokerageNotesDetails/BrokerageNotesDetails";
import { BrokerageNotesAdd } from "./components/BrokerageNotesAdd/BrokerageNotesAdd";

const bn = [
    { id: 2, Numero_Envio: 2, TP_Envio: "L", DT_Envio: "2023-01-30" },
    { id: 3, Numero_Envio: 3, TP_Envio: "U", DT_Envio: "2023-02-28" },
    { id: 4, Numero_Envio: 4, TP_Envio: "L", DT_Envio: "2023-03-30" },
    { id: 5, Numero_Envio: 5, TP_Envio: "L", DT_Envio: "2023-04-29" },
    { id: 6, Numero_Envio: 6, TP_Envio: "L", DT_Envio: "2023-05-30" },
    { id: 7, Numero_Envio: 7, TP_Envio: "U", DT_Envio: "2023-06-29" },
    { id: 8, Numero_Envio: 8, TP_Envio: "L", DT_Envio: "2023-07-30" },
    { id: 9, Numero_Envio: 9, TP_Envio: "L", DT_Envio: "2023-08-29" },
    { id: 10, Numero_Envio: 10, TP_Envio: "U", DT_Envio: "2023-09-30" },
    { id: 11, Numero_Envio: 16, TP_Envio: "L", DT_Envio: "2023-10-31" },
    { id: 12, Numero_Envio: 19, TP_Envio: "L", DT_Envio: "2023-11-28" },
];

export const BrokerageNotes = () => {
    const [modalViewDetailsIsOpen, setModalViewDetailsIsOpen] = useState(false);
    const [bnSelectedID, setBnSelectedID] = useState("");
    const [modalBnAddIsOpen, setModalBnAddIsOpen] = useState(false);
    const [bnSelectedTypeSend, setBnSelectedTypeSend] = useState("");

    const handlerClickSeeDetails = (idBn) => {
        setBnSelectedID(idBn);
        setModalViewDetailsIsOpen(true);
    };

    function closeModalViewDetails() {
        setModalViewDetailsIsOpen(false);
    }

    const handlerClickBnAdd = (typeSend) => {
        setBnSelectedTypeSend(typeSend);
        setModalBnAddIsOpen(true);
    };

    function closeModalBnAdd() {
        setModalBnAddIsOpen(false);
    }

    return (
        <>
            <div className='container containerBrokerageNotes'>
                <div className='containerBrokerageAdd'>
                    <h1>Escolha a forma de inclusão de seus ativos:</h1>
                    <Button className="btn" onClick={() => handlerClickBnAdd("L")}>
                        Enviar varias ativos de uma vez
                    </Button>
                    <Button className="btn" onClick={() => handlerClickBnAdd("U")}>
                        Enviar apenas um Ativo
                    </Button>
                </div>

                <div className='containerListHistoric'>
                    <h1>Lista ativos já enviado</h1>
                    <div className='listBnhistoric'>
                        {bn.map((e) => (
                            <div
                                key={e.id}
                                className='itemListBn'
                            >
                                <Button
                                    className='nBtn'
                                    onClick={() =>
                                        handlerClickSeeDetails(e.Numero_Envio)
                                    }
                                >
                                    {e.Numero_Envio} - {e.TP_Envio} -{" "}
                                    {e.DT_Envio}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BrokerageNotesDetails
                open={modalViewDetailsIsOpen}
                close={closeModalViewDetails}
                idBn={bnSelectedID}
            />

            <BrokerageNotesAdd
                open={modalBnAddIsOpen}
                close={closeModalBnAdd}
                typeSend={bnSelectedTypeSend}
            />
        </>
    );
};
