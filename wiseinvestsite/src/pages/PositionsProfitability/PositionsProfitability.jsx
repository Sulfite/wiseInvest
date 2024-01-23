import { DividendCalendar } from "./components/DividendCalendar/DividendCalendar";
import { Position } from "./components/Position/Position";
import { Profitability } from "./components/Profitability/Profitability";

import "./positionsProfitability.css";

export const PositionsProfitability = () => {
    return (
        <div className='container containerPositionProfitality'>
            <div className='positionBox'>
                Posição
                <Position />
            </div>
            <div className='profitabilityBox'>
                Rentabilidade
                <Profitability />
            </div>
            <div className='positionDetailsBox'>posição detalhada</div>
            <div className='profabilityDetailsBox'>Rentabilidade Detalhada</div>
            <div className='dividendCalendarBox'>
                Calendario de Dividendos
                <DividendCalendar />
            </div>
            <div className='actionButtonsBox'>Botões/Ações</div>
        </div>
    );
};
