import { Link } from "react-router-dom";
import "./viewUser.css";

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
  {
    id: 6,
    title: "Teste Abril",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
    stonksSell: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
  },
  {
    id: 7,
    title: "Teste Abril",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices mollis ligula posuere ultricies. Vivamus purus magna, vehicula ut facilisis vel, hendrerit sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non ornare dui, ac ultrices sem. Fusce ut neque egestas, lobortis quam eu, fringilla.",
    stonksBuy: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
    stonksSell: ["CSNA3", "AGRO3", "BRAP4", "BBSE3"],
  },
];

export const ViewUser = () => {
  return (
    <div className="container containerViewUser">
      <div id="headerRecommendationsUser">
        <h1 className="logo">Recomendações</h1>
      </div>
      <div className="listRecommendationsUser">
        {recommendations.map((e) => (
          <div className="card cardRecommendationUser">
            <h1>{e.title}</h1>
            <p>{e.description}</p>
            <Link className="nBtn" to={`/detailsRecommendations/${e.id}`}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
