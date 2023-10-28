import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import "./users.css";
import { AddUser } from "./AddUser/AddUser";
// import { AddUserContext, AddUserProvider } from "./context/context";

export const Users = () => {
    const [isAddUser, setIsAddUser] = useState(true);

    // const [isAddUser, setIsAddUser] = useContext(AddUserContext);

    const handlerClickAdicionar = () => {
        setIsAddUser(true);
    };

    return (
        // <AddUserProvider>
        <div className='container containerUsers'>
            {isAddUser === true ? <AddUser /> : ""}

            <div className='userList'>
                <div className='headerUserList'>
                    nome perfil ação
                    <Button onClick={handlerClickAdicionar}>Adicionar</Button>
                </div>
                <div className='card userItem'>
                    nome perfil
                    <Button>editar</Button>
                    <Button>delete</Button>
                </div>
            </div>
        </div>
        // </AddUserProvider>
    );
};
