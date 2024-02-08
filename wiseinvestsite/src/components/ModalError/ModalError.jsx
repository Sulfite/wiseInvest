import "./modalError.css";
import { ModalComponent } from "../Modal/ModalComponent";
import Button from "../Button/Button";

export const ModalError = ({ title, mensagem, openModal, closeModal }) => {
    const customStyles = {
        content: {
            top: "45%",
            left: "45%",
            right: "auto",
            bottom: "auto",
            marginRight: "-40%",
            transform: "translate(-50%, -50%)",
            width: "50%",
        },
    };


    // const [modalIsOpen, setIsOpen] = useState(true);
    
    // const openModal = () => {
    //     setIsOpen(true);
    // };

    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <ModalComponent
            open={openModal}
            close={closeModal}
            customStyles={customStyles}
        >
            <div className='containerModalErrorAdd'>
                <h1>{title}</h1>

                <p>{mensagem}</p>

                <div className="containerButtonModalErro">
                    <Button className="btn" onClick={closeModal}>
                        Fechar
                    </Button>
                </div>


            </div>
        </ModalComponent>
    );
};
