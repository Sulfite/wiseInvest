import "./modalViewDetails.css";

import { ModalComponent } from "../../../../components/Modal/ModalComponent";
import Button from "../../../../components/Button/Button";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { customStyles } from '../../../../_config/custonStylesModal';

export const ModalViewDetailsWallet = ({ open, close, idWallet }) => {
    const [info, setInfo] = useState({
        titleWallet: "Carteira Principal",
        description:
            "Carteira dos meus principais ativos, Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    });

    // funcao para realizar chamada de detalhes da carteira
    // const componentDidMount = () => {
    // setInfo({
    //     titleWallet: "Carteira Principal",
    //     description: "Carteira dos meus principais ativos, Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
    // })
    // }

    return (
        <ModalComponent
            open={open}
            // onAfterOpen={afterOpenModal}
            close={close}
            customStyles={customStyles}
            // contentLabel='Example Modal'
        >
            <div className='containerModalTitle'>
                <h1 className="logo">{info.titleWallet}</h1>
                <Button
                    className='nBtn'
                    onClick={close}
                >
                    <IoMdClose />
                </Button>
            </div>

            <div className='containerModalBody'>
                <p>{info.description}</p>
            </div>
        </ModalComponent>
    );
};
