import { Link, useNavigate } from "react-router-dom";

import Button from "../../../../components/Button/Button";

import "./viewAnalyst.css";
import { Header } from "../../../../components/Header/Header";

const recommendations = [
  {
    id: 1,
    title: "Teste Janeiro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: [
      "LEVE3",
      "AURE3",
      "PETR4",
      "GRND3",
      "PETR3",
      "GOAU4",
      "CSNA3",
      "AGRO3",
      "BRAP4",
      "BBSE3",
    ],
    stonksSell: [],
  },
  {
    id: 2,
    title: "Teste Fevereiro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: ["LEVE3", "AGRO3", "BRAP4", "BBSE3"],
    stonksSell: [],
  },
  {
    id: 3,
    title: "Teste Março",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: [],
    stonksSell: [
      "LEVE3",
      "AURE3",
      "PETR4",
      "GRND3",
      "PETR3",
      "GOAU4",
      "CSNA3",
      "AGRO3",
      "BRAP4",
      "BBSE3",
    ],
  },
  {
    id: 4,
    title: "Teste Abril",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
    stonksSell: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
  },
  {
    id: 5,
    title: "Teste Maio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: [],
    stonksSell: [],
  },
];

export const ViewAnalyst = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container containerViewanalyst">
        <div id="headerIndicationRecommendations">
          <h1 className="logo">Indicações de Recomendações</h1>
          {/* <Button className="btn" onClick={() => {teste}} >Cadastrar nova Inidicação</Button> */}
          <Link className="nBtn" to="addIndicationRecommendation">
            Cadastrar nova Inidicação
          </Link>
        </div>
        <div className="listRecommendations">
          {recommendations.map((e) => (
            <div key={e.id} className="card cardRecommendation">
              <h1>{e.title}</h1>
              <p>{e.description}</p>
              <div className="stonksButSell">
                {e.stonksBuy.length > 0 ? (
                  <div>
                    <h3>Recomendações de Compra</h3>
                    <ul>
                      {e.stonksBuy.map((stonkBuy) => (
                        <li>{stonkBuy}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {e.stonksSell.length > 0 ? (
                  <div>
                    <h3>Recomendações de Venda</h3>
                    <ul>
                      {e.stonksSell.map((stonkSell) => (
                        <li>{stonkSell}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
