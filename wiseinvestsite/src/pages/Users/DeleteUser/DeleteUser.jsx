import Button from "../../../components/Button/Button";

import "./deleteUser.css";
import { ModalComponent } from "../../../components/Modal/ModalComponent";
import { customStyles } from "../../../_config/custonStylesModal";

export const DeleteUser = ({ open, close, idUser }) => {
    return (
        <ModalComponent
            open={open}
            close={close}
            customStyles={customStyles}
        >
            <div className='containerDeleteUser'>
                <p>Tem certeza ? {idUser} </p>

                <Button className="btn-danger" onClick={close}>
                    Sim
                </Button>
                <Button className={"btn"} onClick={close}>
                    Não
                </Button>
            </div>
        </ModalComponent>
    );
};
