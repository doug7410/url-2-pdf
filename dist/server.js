"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
//For env File
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 8000;
app_1.default.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});
