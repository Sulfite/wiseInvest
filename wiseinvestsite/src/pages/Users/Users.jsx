import { useContext, useEffect, useState } from "react";
import instance from "../../_config/axiosConfig";

import Button from "../../components/Button/Button";
import { AddUser } from "./AddUser/AddUser";
import { ItemUser } from "./ItemUser/itemUser";

import "./users.css";
import { IoMdPersonAdd } from "react-icons/io";

// const users = [
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
//     {
//         name: "Lucas Moreira Hungaro",
//         perfil: "Analista",
//     },
//     {
//         name: "Lara da costa Losasso",
//         perfil: "Premiun",
//     },
//     {
//         name: "Jair Aparecido Hungaro",
//         perfil: "Free",
//     },
//     {
//         name: "Vinicius Moreira Hungaro",
//         perfil: "Master",
//     },
// ];

export const Users = () => {
    const [usersList, setUsersList] = useState();

    async function getUsers() {
        let output = await instance
            .get(`/getUsers/${0}/${10}`)
            .then((response) => {
                return response.data;
            });
        return setUsersList(output);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='container containerUsers'>
            <div className='userList'>
                <table>
                    <ItemUser
                        name={"Nome"}
                        perfil={"Perfil"}
                        action={"Ações"}
                        header={true}
                    />

                    {usersList &&
                        usersList.map((x) => {
                            return (
                                <ItemUser
                                    name={x.Name_user}
                                    perfil={x.ID_Access_Type}
                                />
                            );
                        })}
                </table>
            </div>
        </div>
    );
};
