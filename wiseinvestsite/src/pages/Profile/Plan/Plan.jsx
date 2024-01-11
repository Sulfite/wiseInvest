import { useState } from "react";
import Button from "../../../components/Button/Button";

import "./plan.css";

export const Plan = (props) => {

	const [isLogged, setIsLogged] = useState(props.isLogged);
    const [currentPlan, setCurrentPlan] = useState('Free');
    
    const handlerClick = () => {
        setCurrentPlan('Premium');
    }

	return (
		<div className="myPlaContainer">
			{ (isLogged === true) ?
			    <div className="card planReplacementContainer">
                    <div className="currentPlan">
                        <h1>Meu plano</h1>
                        <h2>{`${currentPlan}`}</h2>
                    </div>
                    
                    { (currentPlan === 'Free') ?
                        <div className="card plan">
                            <h1>Premium</h1>
                            <ul>
                                <li>Rentabilidades</li>
                                <li>Mutiplas Cateiras</li>
                                <li>Calendario de dividendos da/s carteiras</li>
                                <li>Acesso a recomendações de Analistas</li>
                            </ul>
                            <h3>R$ 10,00</h3>
                            <Button onClick={handlerClick} typeStyle={"btn"}>
                                Trocar de plano
                            </Button>
                        </div>
                        : ""
                    }
				</div>
                :
                <div className="plans">
                    <div className="card plan">
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
                    <div className="card plan">
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
			}
		</div>
	)
}