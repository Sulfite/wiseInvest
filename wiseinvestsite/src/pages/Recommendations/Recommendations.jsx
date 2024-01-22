/*
  Cadastro de Indicações
  Visualização por parte do analista
  Visualização por parte do usuario
*/

import { useState } from "react";
import { ViewAnalyst } from "./components/ViewAnalyst/ViewAnalyst";
import { ViewUser } from "./components/ViewUser/ViewUser";


export const Recommendations = ({type}) => {
  const [teste, setTeste] = useState("Analista");

  console.log(type);

  return (
    <div className="container containerRecommendations">
      {type === "Analista" ? (
        <div className="viewAnalyst">
          <ViewAnalyst />
        </div>
      ) : (
        <div className="viewUser">
          <ViewUser />
        </div>
      )}
    </div>
  );
};
