/*
  Cadastro de Indicações
  Visualização por parte do analista
  Visualização por parte do usuario
*/

import { useState } from "react";
import { ViewAnalyst } from "./components/ViewAnalyst/ViewAnalyst";
import { Outlet } from "react-router-dom";

export const Recommendations = (type) => {
  const [teste, seteTeste] = useState("Analista");

  return (
    <div className="container containerRecommendations">
      {teste === "Analista" ? (
        <div className="viewAnalyst">
          <ViewAnalyst />
        </div>
      ) : (
        <div className="viewUser">Visualização por parte do usuario</div>
      )}

      <Outlet />
    </div>
  );
};
