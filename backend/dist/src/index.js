"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
const port = 3000;
// Configura la conexión a PostgreSQL
const pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "myapp_db",
    password: "yourpassword",
    port: 5432,
});
// Rutas del servidor
app.get("/api/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query("SELECT * FROM data");
    res.json(result.rows);
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
