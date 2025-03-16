"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js (en la raíz de la carpeta backend)
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Permite solicitudes desde cualquier origen
app.use((0, cors_1.default)());
// Ruta de ejemplo
app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from backend' });
});
// Escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Backend running on http://localhost:3000');
});
