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
exports.url2pdf = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = require("fs");
function url2pdf(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const pdf = yield saveAsPdf(url);
        const path = '/app/file.pdf';
        (0, fs_1.writeFileSync)(path, pdf);
        return path;
    });
}
exports.url2pdf = url2pdf;
const saveAsPdf = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch();
    const page = yield browser.newPage();
    yield page.goto(url, {
        waitUntil: 'networkidle0',
    });
    const result = yield page.pdf({
        format: 'Letter',
    });
    yield browser.close();
    return result;
});
