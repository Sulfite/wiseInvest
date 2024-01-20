import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <div className="logo">
          <Link to={"/dashboard"}>
            <h1>Wise Invest</h1>
          </Link>
        </div>

        <nav>
          {/* Todos  */}
          <Link to={"/profile"}>Perfil</Link>
          {/* 1 */}
          <Link to={"/users"}>Usuarios</Link>{" "}
          {/* Controle de acessos e usuarios */}
          {/* 2 */}
          <Link to={"/myRecommendation"}>Minhas Recomendações</Link>{" "}
          {/* Cadastro de Recomendações - Interno button para cadastro */}
          {/* 3 */}
          <Link to={"/Wallets"}>Carteiras</Link>{" "}
          {/* Cadastro de carteira - Carteira Multiplas */}
          <Link to={"/brokerageNotes"}>Nova Nota de Corretagem</Link>{" "}
          {/* Cadastro de notas de corretagem */}
          <Link to={"/recommendations"}>Recomendações</Link>{" "}
          {/* Recomendações de analistas */}
          {/* Pensar
                  Rentabilidade
                  Calendario de Dividendos  */}
          {/* 4 */}
          {/* Cadastro de carteira - Carteira Unica */}
          {/* Cadastro de notas de corretagem */}
          <Link to={"/detailedProfitability"}>Rentabilidade Detalhada</Link>
          {/* Rentabilidade */}
        </nav>
      </div>

      <Outlet />
    </>
  );
};
