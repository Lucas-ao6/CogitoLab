import pt from "../../src/data/pt.json";
import en from "../../src/data/en.json";

let idioma = localStorage.getItem("idioma");

if (idioma === null) {
    idioma = "pt";
}

const idiomas = {
    pt: pt,
    en: en
};

const botao = document.querySelector("#idioma");

function aplicarIdioma() {
    const traducoes = idiomas[idioma];

    document.querySelectorAll("[data-traducao]").forEach((elemento) => {
        const chave = elemento.dataset.traducao;
        const partes = chave.split(".");
        const texto = traducoes[partes[0]][partes[1]];

        elemento.textContent = texto;
    });

    if (idioma === "pt") {
        botao.textContent = "en";
    } 
    else {
        botao.textContent = "pt";
    }
}

function trocarIdioma() {
    if (idioma === "pt") {
        idioma = "en";
    } 
    else {
        idioma = "pt";
    }

    localStorage.setItem("idioma", idioma);

    aplicarIdioma();
}

botao.addEventListener("click", trocarIdioma);
window.addEventListener("DOMContentLoaded", aplicarIdioma);