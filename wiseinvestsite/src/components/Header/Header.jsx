import { Link, Outlet, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../../redux/rootReducer";
import Button from "../Button/Button";
import UserActionsTypes from "../../redux/User/actionTypes";
import { isLogged, isNullOrEmpty } from "../../_assests/js/Ultils";

export const Header = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const { currentUser } = useSelector(
        (rootReducer) => rootReducer.userReducer
    );

    if (isNullOrEmpty(currentUser)) {
        isLogged(false);
    }

    isLogged(currentUser.authorized);

    const handlerClickLogout = async (e) => {
        e.preventDefault();
        dispatch({
            type: UserActionsTypes.LOGOUT,
        });
        nav("/");
    };

    return (
        <>
            <div className='containerHeader'>
                <div className='logo'>
                    <Link to={"/dashboard"}>
                        <h1>Wise Invest</h1>
                    </Link>
                </div>

                <nav>
                    {/* Todos  */}
                    <Link to={"/profile"}>Perfil</Link>
                    {/* 1 */}
                    {(currentUser.personType === 1) ? (<Link to={"/users"}>Usuarios</Link>) : ('')}
                    
                    {/* Controle de acessos e usuarios */}
                    {/* 2 */}
                    {(currentUser.personType === 2) ? (<Link to={"/myRecommendation"}>
                        Minhas Recomendações
                    </Link>) : ('')}
                    
                    {/* Cadastro de Recomendações - Interno button para cadastro */}
                    {/* 3 */}
                    <Link to={"/Wallets"}>Carteiras</Link>{" "}
                    {/* Cadastro de carteira - Carteira Multiplas */}
                    <Link to={"/brokerageNotes"}>
                        Nova Nota de Corretagem
                    </Link>{" "}
                    {/* Cadastro de notas de corretagem */}
                    {(currentUser.personType === 3) ? (<Link to={"/recommendations"}>Recomendações</Link>) : ('')}
                    {/* Recomendações de analistas */}
                    {/* Pensar
                  Rentabilidade
                  Calendario de Dividendos  */}
                    {/* 4 */}
                    {/* Cadastro de carteira - Carteira Unica */}
                    {/* Cadastro de notas de corretagem */}
                    <Link to={"/detailedProfitability"}>
                        Rentabilidade Detalhada
                    </Link>
                    {/* Rentabilidade */}
                    <Button
                        className='nbtn'
                        type='button'
                        onClick={handlerClickLogout}
                    >
                        Sair
                    </Button>
                </nav>
            </div>

            <Outlet />
        </>
    );
};
