import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import "./users.css";
import { AddUser } from "./AddUser/AddUser";
import { ItemUser } from "./ItemUser/itemUser";

import { IoMdPersonAdd } from "react-icons/io";

const users = [
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    },
    {
        name: "Lucas Moreira Hungaro",
        perfil: "Analista",
    },
    {
        name: "Lara da costa Losasso",
        perfil: "Premiun",
    },
    {
        name: "Jair Aparecido Hungaro",
        perfil: "Free",
    },
    {
        name: "Vinicius Moreira Hungaro",
        perfil: "Master",
    }
];

export const Users = () => {
    const [isAddUser, setIsAddUser] = useState(false);

    return (
        <div className='container containerUsers'>
            <div className='userList'>
                <ItemUser
                    name={"Nome"}
                    perfil={"Perfil"}
                    action={"Ações"}
                    header={true}
                />
                {users.map((x) => {
                    return (
                        <ItemUser
                            name={x.name}
                            perfil={x.perfil}
                        />
                    );
                })}
            </div>
        </div>
    );
};
