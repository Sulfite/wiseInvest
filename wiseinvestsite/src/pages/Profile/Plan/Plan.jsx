import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button/Button";

import "./plan.css";
import UserActionsTypes from "../../../redux/User/actionTypes";
import { reqPutPlanUser } from "../../../api/userApi";

export const Plan = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(
        (rootReducer) => rootReducer.userReducer
    );

    const [isLogged, setIsLogged] = useState(props.isLogged);
    const [currentPlan, setCurrentPlan] = useState(currentUser.personType);

    const handlerClick = () => {
        const reqPlan = reqPutPlanUser(3);

        reqPlan.then((response) => {
            console.log(response);

            if (response.length > 0) {
                setCurrentPlan(3);

                dispatch({
                    type: UserActionsTypes.UPPLAN,
                    payload: {
                        authorized: true,
                        personType: 3,
                    },
                });
            }
        });
    };

    return (
        <div className='myPlaContainer'>
            {isLogged === true ? (
                <div className='card planReplacementContainer'>
                    <div className='currentPlan'>
                        <h1>Meu plano</h1>
                        <h2>{`${currentPlan === 4 ? "Free" : "Premiun"}`}</h2>
                    </div>

                    {currentPlan === 4 ? (
                        <div className='card plan'>
                            <h1>Premium</h1>
                            <ul>
                                <li>Rentabilidades</li>
                                <li>Mutiplas Cateiras</li>
                                <li>Calendario de dividendos da/s carteiras</li>
                                <li>Acesso a recomendações de Analistas</li>
                            </ul>
                            <h3>R$ 10,00</h3>
                            <Button
                                onClick={handlerClick}
                                typeStyle={"btn"}
                            >
                                Trocar de plano
                            </Button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <div className='plans'>
                    <div className='card plan'>
                        <h1>Free</h1>
                        <ul>
                            <li>Rentabilidade</li>
                            <li>Uma Carteira</li>
                        </ul>
                        <h3>R$ 0,00</h3>
                        <Button typeStyle={"btn"}>
                            Você está aqui - Registre-se
                        </Button>
                    </div>
                    <div className='card plan'>
                        <h1>Premium</h1>
                        <ul>
                            <li>Rentabilidades</li>
                            <li>Mutiplas Cateiras</li>
                            <li>Calendario de dividendos da/s carteiras</li>
                            <li>Acesso a recomendações de Analistas</li>
                        </ul>
                        <h3>R$ 10,00</h3>
                        <Button typeStyle={"btn"}>
                            Aproveitar essa oportunidade
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
