import { useState } from "react";

import { ModalAddWallet } from "./components/ModalAddWallet/ModalAddWallet";
import { ModalViewDetailsWallet } from "./components/ModalViewDetails/ModalViewDetails";

import Button from "../../components/Button/Button";

import "./wallets.css";

export const Wallets = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalViewDetailsIsOpen, setModalViewDetailsIsOpen] = useState(false);
    const [walletSelectedID, setWalletSelectedID] = useState("");

    const handlerClickAddWallet = () => {
        setIsOpen(true);
    };

    const handlerClickSeeDetails = (idWallet) => {
        setWalletSelectedID(idWallet);
        setModalViewDetailsIsOpen(true);
    };

    function closeModal() {
        setIsOpen(false);
    }

    function closeModalViewDetails() {
        setModalViewDetailsIsOpen(false);
    }

    return (
        <>
            <div className='container conteinerWallets'>
                <div className='titleWallets'>
                    <h1 className='logo'>Carteiras</h1>
                    <Button
                        className='btn'
                        onClick={handlerClickAddWallet}
                    >
                        Adicionar Carteira
                    </Button>
                </div>
                <div className='conteinerItemWallets'>
                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button
                            className='btn'
                            onClick={() => handlerClickSeeDetails(10)}
                        >
                            Ver Detalhes
                        </Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>

                    <div className='card itemWallet'>
                        <h1>Carteira Principal</h1>
                        <p>
                            Carteira dos meus principais ativos, Lorem Ipsum é
                            simplesmente uma simulação de texto da indústria
                            tipográfica e de impressos, e vem sendo utilizado
                            desde o século XVI, quando um impressor desconhecido
                            pegou uma bandeja de tipos e os embaralhou para
                            fazer um livro de modelos de tipos. Lorem Ipsum
                            sobreviveu não só a cinco séculos, como também ao
                            salto para a editoração eletrônica, permanecendo
                            essencialmente inalterado. Se popularizou na década
                            de 60, quando a Letraset lançou decalques contendo
                            passagens de Lorem Ipsum, e mais recentemente quando
                            passou a ser integrado a softwares de editoração
                            eletrônica como Aldus PageMaker.
                        </p>
                        <Button className='btn'>Ver Detalhes</Button>
                    </div>
                </div>
            </div>

            <ModalAddWallet
                open={modalIsOpen}
                close={closeModal}
            />

            <ModalViewDetailsWallet
                open={modalViewDetailsIsOpen}
                close={closeModalViewDetails}
                idWallet={walletSelectedID}
            />
        </>
    );
};
