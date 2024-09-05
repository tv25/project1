"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/hello', controller_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
