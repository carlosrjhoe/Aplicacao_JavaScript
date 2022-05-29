"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users.route"));
users_route_1.default;
const app = (0, express_1.default)();
app.use(users_route_1.default);
app.get('/status', (req, res, next) => {
    res.status(200).send('Olá Mundo!, Vamos começar a aprogramar...');
});
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000, Executei!');
});
