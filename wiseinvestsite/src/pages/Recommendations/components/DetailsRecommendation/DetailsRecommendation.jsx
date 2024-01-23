import { useParams } from "react-router-dom";

import "./detailsRecommendation.css";

const recommendation = {
  id: 1,
  autor: "Teste autor",
  dtPublish: "2024/01/03",
  title: "Teste Janeiro",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ex felis, ac blandit ipsum tristique sit amet. Donec at mi sed diam tristique pharetra. Sed eu ex mauris. Integer pretium viverra turpis, interdum varius erat convallis in. Praesent aliquam magna eget ante aliquet gravida. Mauris eu congue quam. Cras venenatis id leo tincidunt semper. Sed sagittis nulla vel venenatis vestibulum. Nulla vitae lobortis nisi. Proin et orci gravida, mattis metus ac, faucibus quam. Proin finibus justo nisl, vel imperdiet massa pretium id. Etiam rutrum tincidunt cursus.\nIn venenatis ante non ullamcorper vulputate. Ut et malesuada mi. Praesent cursus auctor tellus et varius. Pellentesque iaculis maximus lacinia. Morbi nibh lorem, laoreet ut cursus et, pulvinar et massa. Nunc condimentum turpis arcu, eget congue tellus molestie eu. Donec et eros libero. Aliquam et eleifend sem. Vivamus nibh nisi, mollis eu est ut, consectetur venenatis lorem. Ut ligula tortor, pulvinar a lacus eget, ornare pulvinar metus. Curabitur sit amet viverra sapien, sit amet scelerisque orci. Vestibulum lacus ligula, cursus quis porta nec, congue in tellus. Curabitur velit tellus, vestibulum ut viverra nec, porttitor vestibulum magna. Maecenas non arcu sed libero consequat varius et vel elit. Proin eu ullamcorper mi.\nDonec quis bibendum lacus. Donec dapibus rhoncus augue, at tempus sem rhoncus nec. Nunc nec elit congue, maximus est at, interdum nulla. Curabitur ac lobortis neque, id consectetur mauris. Nullam sit amet gravida eros. Sed nisl ante, posuere nec sagittis vel, hendrerit et est. Curabitur sapien mauris, efficitur et porta non, ornare eu ligula. Maecenas volutpat gravida mauris, ultrices fermentum felis laoreet et. Fusce eu mauris suscipit, feugiat metus sed, dapibus neque. Pellentesque semper pulvinar mauris nec semper.\nPraesent in pellentesque risus. Sed feugiat, arcu eu laoreet eleifend, purus lacus maximus est, porttitor viverra erat augue vitae nisi. Maecenas a sem purus. Nunc sodales ante ipsum, eu congue magna venenatis nec. Aliquam condimentum elementum risus, in tincidunt ante pretium id. Duis consectetur cursus elit, nec feugiat mi interdum sed. Quisque pretium nibh vitae scelerisque tincidunt. Integer eget urna tortor. Mauris pellentesque blandit nisi et aliquam. Nunc bibendum venenatis urna.\nDonec in lectus diam. Sed mattis diam eu efficitur sollicitudin. Donec a odio a augue venenatis dignissim sit amet eu eros. Nam cursus leo et risus molestie accumsan. Praesent at odio ut arcu tempus commodo eu id justo. Aliquam a pellentesque erat, sit amet maximus ligula. Nam ornare justo ante, ac facilisis urna aliquet nec. Fusce tempor felis magna, at molestie nulla dictum nec. Mauris tristique mollis interdum./nQuisque non tempor ex. Sed gravida accumsan porttitor. Curabitur eget dolor a lectus hendrerit condimentum non gravida mauris. Etiam eget tincidunt tellus. Pellentesque eu libero pellentesque, facilisis tellus a, rhoncus sapien. Sed ut suscipit sapien. Pellentesque et cursus metus, id condimentum sem. Curabitur semper hendrerit felis eget fermentum.Quisque sed dolor tincidunt, suscipit risus vitae, mattis dui. Sed auctor massa in nibh blandit gravida. Donec dignissim lectus metus, sed blandit odio vehicula ut. Sed lacinia posuere purus, sed placerat nibh mattis non. Suspendisse eget risus sed.",
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
  stonksSell: [
    "BHIA3",
    "PCAR3",
    "BEEF3",
    "PETZ3",
    "ALPA4",
    "RECV3",
    "ASAI3",
    "RRRP3",
    "SOMA3",
    "CVCB3",
  ],
};

export const DetailsRecommendation = () => {
  let { idDetailsRecommendation } = useParams();

  return (
    <div className="container containerDetailsRecommendation">
      <div className="containerDetailsRecommendationWidth">
        <div className="detailsRecommendationHeader">
          <h1>
            {recommendation.title} - {recommendation.id}{" "}
            {idDetailsRecommendation}
          </h1>
          <div className="subTitleDetailsRecommendation">
            <h5>Autor: {recommendation.autor}</h5>
            <h5>Data de Publicação: {recommendation.dtPublish}</h5>
          </div>
        </div>
        <div className="detailsRecommndationBody">
          <p>{recommendation.description}</p>
          <div className="recommendationsStonks">
            <div className="buyRecommndationStonks">
              <h3>Recomendações de Compra</h3>
              <ul>
                {recommendation.stonksBuy.map((stonkBuy) => (
                  <li>{stonkBuy}</li>
                ))}
              </ul>
            </div>
            <div className="sellRecommndationStonks">
              <h3>Recomendações de Venda</h3>
              <ul>
                {recommendation.stonksSell.map((stonkSell) => (
                  <li>{stonkSell}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
