import { IoMdPersonAdd } from "react-icons/io";
import { isNullOrEmpty } from "../../../_assests/js/Ultils";
import Button from "../../../components/Button/Button";

import "./itemUser.css";
import { useState } from "react";
import { AddUser } from "../AddUser/AddUser";

const ItemUserN = ({ name, perfil }) => {
    return (
        <>
            <div className='itemName'>
                <span>{name}</span>
            </div>
            <div className='itemProfile'>
                <span>{perfil}</span>
            </div>
            <div className='itemButon'>
                <Button className='btn'>editar</Button>
                <Button className='btn-danger'>delete</Button>
            </div>
        </>
    );
};

const ItemUserHeader = ({ name, perfil, action }) => {
    const [isAddUser, setIsAddUser] = useState(false);

    return (
        <>
            <div className='itemNameHeader'>
                <span>{name}</span>
            </div>
            <div className='itemProfileHeader'>
                <span>{perfil}</span>
            </div>
            <div className='itemButonHeader'>
                <Button className='btn-img' onClick={() => setIsAddUser(true)}>
                    <span>{action}</span>
                    <IoMdPersonAdd />
                </Button>
            </div>
            {isAddUser && <AddUser dropdown={setIsAddUser} />}
        </>
    );
};

export const ItemUser = (props) => {
    return (
        <div className='userItem'>
            {((!isNullOrEmpty(props.header)) && (props.header === true)) ? (
                <ItemUserHeader
                    name={props.name}
                    perfil={props.perfil}
                    action={props.action}
                />
            ) : (
                <ItemUserN
                    name={props.name}
                    perfil={props.perfil}
                />
            )}
        </div>
    );
};
