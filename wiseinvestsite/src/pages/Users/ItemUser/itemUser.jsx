import { IoMdPersonAdd } from "react-icons/io";
import { isNullOrEmpty } from "../../../_assests/js/Ultils";
import Button from "../../../components/Button/Button";

import "./itemUser.css";
import { useState } from "react";
import { AddUser } from "../AddUser/AddUser";

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
    const [isAddUser, setIsAddUser] = useState(false);

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
                        onClick={() => setIsAddUser(true)}
                    >
                        editar
                    </Button>
                    <Button className='btn-danger'>delete</Button>
                </div>
            </td>

            {/* <div className='itemName'>
            </div>
            <div className='itemProfile'>
            </div> */}
            {isAddUser && <AddUser dropdown={setIsAddUser} />}
        </>
    );
};

const ItemUserHeader = ({ name, perfil, action }) => {
    const [isAddUser, setIsAddUser] = useState(false);

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
                        onClick={() => setIsAddUser(true)}
                    >
                        <span>{action}</span>
                        <IoMdPersonAdd />
                    </Button>
                </div>
            </th>
            {/* <div className='itemNameHeader'>
            </div>
            <div className='itemProfileHeader'>
            </div> */}
            {isAddUser && <AddUser dropdown={setIsAddUser} />}
        </>
    );
};

export const ItemUser = (props) => {
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
                <ItemUserN
                    name={props.name}
                    perfil={props.perfil}
                />
            )}
        </tr>
        // </div>
    );
};
