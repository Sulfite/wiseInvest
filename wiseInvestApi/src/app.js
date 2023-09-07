require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();
const cors = require("cors");
const port = process.env.PORT_API;

// Usos necessarios
app.use(cors("*"));
app.use(bodyParser.json());

// Importação das Rotas
const usuariosRoutes = require("./Routes/usuarioRoutes");
const authenticationRoutes =  require("./Routes/authenticationRoutes");
const walletRoutes = require("./Routes/walletRoutes");
const walletRecommendationRoutes = require("./Routes/walletRecommendationRoutes");
const addressRoutes = require("./Routes/addressRoutes");
const investmentBrokerageRoutes = require("./Routes/investmentBrokerageRoutes");
const phoneRoutes = require("./Routes/phoneRoutes");
const brokerageNotesRoutes = require("./Routes/brokerageNotesRoutes");

// Rotas por modulos
app.use("/", usuariosRoutes);
app.use("/auth", authenticationRoutes);
app.use("/wallet", walletRoutes);
app.use("/walletRecommendation", walletRecommendationRoutes);
app.use("/address", addressRoutes);
app.use("/ib", investmentBrokerageRoutes);
app.use("/phone", phoneRoutes);
app.use("/bn", brokerageNotesRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})