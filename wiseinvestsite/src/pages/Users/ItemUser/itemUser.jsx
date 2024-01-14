import { IoMdPersonAdd } from "react-icons/io";
import { isNullOrEmpty } from "../../../_assests/js/Ultils";
import Button from "../../../components/Button/Button";

import "./itemUser.css";
import { useState } from "react";
import { AddUser } from "../AddUser/AddUser";
import { DeleteUser } from "../DeleteUser/DeleteUser";

// const ItemUserN = ({ name, perfil }) => {
//     const [isAddUser, setIsAddUser] = useState(false);

//     return (
//         <>
//             <div className='itemName'>
//                 <span>{name}</span>
//             </div>
//             <div className='itemProfile'>
//                 <span>{perfil}</span>
//             </div>
//             <div className='itemButon'>
//                 <Button className='btn' onClick={() => setIsAddUser(true)}>editar</Button>
//                 <Button className='btn-danger'>delete</Button>
//             </div>
//             {isAddUser && <AddUser dropdown={setIsAddUser} />}
//         </>
//     );
// };

// const ItemUserHeader = ({ name, perfil, action }) => {
//     const [isAddUser, setIsAddUser] = useState(false);

//     return (
//         <>
//             <div className='itemNameHeader'>
//                 <span>{name}</span>
//             </div>
//             <div className='itemProfileHeader'>
//                 <span>{perfil}</span>
//             </div>
//             <div className='itemButonHeader'>
//                 <Button className='btn-img' onClick={() => setIsAddUser(true)}>
//                     <span>{action}</span>
//                     <IoMdPersonAdd />
//                 </Button>
//             </div>
//             {isAddUser && <AddUser dropdown={setIsAddUser} />}
//         </>
//     );
// };

const ItemUserN = ({ name, perfil }) => {
    const [modalEdtUser, setModalEdtUser] = useState(false);
    const [userSelectedID, setUserSelectedID] = useState("");
    const [modalDeleteUser, setModalDeleteUser] = useState(false);

    const handlerClickEdtUser = idUser => {
        setUserSelectedID(idUser);
        setModalEdtUser(true);
    };

    function closeModalEdtUser() {
        setModalEdtUser(false);
    }

    const handlerClickDeleteUser = idUser => {
        setUserSelectedID(idUser);
        setModalDeleteUser(true);
    };

    function closeModalDeleteUser() {
        setModalDeleteUser(false);
    }

    return (
        <>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{perfil}</span>
            </td>
            <td>
                <div className='itemButon'>
                    <Button
                        className='btn'
                        onClick={() => handlerClickEdtUser(1)}
                    >
                        editar
                    </Button>
                    <Button
                        className='btn-danger'
                        onClick={() => handlerClickDeleteUser(2)}
                    >
                        delete
                    </Button>
                </div>
            </td>

            <AddUser
                open={modalEdtUser}
                close={closeModalEdtUser}
                idUser={userSelectedID}
            />

            <DeleteUser
                open={modalDeleteUser}
                close={closeModalDeleteUser}
                idUser={userSelectedID}
            />
        </>
    );
};

const ItemUserHeader = ({ name, perfil, action }) => {
    const [modalAddUser, setModalAddUser] = useState(false);

    const handlerClickAddUser = typeSend => {
        setModalAddUser(true);
    };

    function closeModalAddUser() {
        setModalAddUser(false);
    }

    return (
        <>
            <th>
                <span>{name}</span>
            </th>
            <th>
                <span>{perfil}</span>
            </th>
            <th>
                <div className='itemButonHeader'>
                    <Button
                        className='btn-img'
                        onClick={() => handlerClickAddUser(true)}
                    >
                        <span>{action}</span>
                        <IoMdPersonAdd />
                    </Button>
                </div>
            </th>
            <AddUser open={modalAddUser} close={closeModalAddUser} />
        </>
    );
};

export const ItemUser = props => {
    return (
        // <div className='userItem'>
        <tr>
            {!isNullOrEmpty(props.header) && props.header === true ? (
                <ItemUserHeader
                    name={props.name}
                    perfil={props.perfil}
                    action={props.action}
                />
            ) : (
                <ItemUserN name={props.name} perfil={props.perfil} />
            )}
        </tr>
        // </div>
    );
};
