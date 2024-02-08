/* import { Articolo } from './modules/articolo.js'; // import del modulo di classe */

let articoloInArrivo = document.getElementById("articolo_in_arrivo");
let dataArrivoArticolo = document.getElementById("data_arrivo_articolo");

/* Tab Dati Articolo */
var nome = document.getElementById("nome");
var fornitore = document.getElementById("fornitore");
var codiceArticoloFornitore = document.getElementById(
  "codiceArticoloFornitore"
);
var codiceArticolo = document.getElementById("codiceArticolo");
var dataRegistrazioneProdotto = document.getElementById(
  "dataRegistrazioneProdotto"
);
var dataScadenzaProdotto = document.getElementById("dataScadenzaProdotto");
var codiceEanUpc = document.getElementById("codiceEanUpc");
var categoriaMerce = document.getElementById("categoriaMerce");
var sedeMagazzino = document.getElementById("sedeMagazzino");
var ubicazioneMagazzino = document.getElementById("ubicazioneMagazzino");
var espressionePeso = document.getElementById("espressionePeso");
var marca = document.getElementById("marca");
var peso = document.getElementById("peso");
var esporta = document.getElementById("esporta");
var comments = document.getElementById("comments");
var btnCopia = document.getElementById("copia");
/* ////Tab Dati Articolo\\\\ */

/* Tab giacenza */
var giacenza = document.getElementById("giacenza");
var scortaMinima = document.getElementById("scortaMinima");
var quantitativoMinimoOrdinabile = document.getElementById(
  "quantitativoMinimoOrdinabile"
);
var quantitativoPerOgniCollo = document.getElementById(
  "quantitativoPerOgniCollo"
);
/* /////Tab giacenza \\\\*/

var btnSalva = document.getElementById("salva_con_nome");
let validazioneCampi = document.getElementById("validazione_campi");
let salva = document.getElementById("salva");
const myModalEl = document.getElementById("myModal");
var lista = [];
validazioneCampi.innerHTML = "";
const forms = document.querySelectorAll(".needs-validation");
const tableOnForm = document.getElementById("table_one_form");
window.addEventListener("load", init);

/* Se, all'avvio, il localstorage contiene oggetti, li stampo in tabella */
function init() {
  if (localStorage.getItem("myForm") !== null) {
    lista = JSON.parse(localStorage.getItem("myForm"));
    stampaLista();
  }
}

/* Abilito il campa date se la checkbox è selezionata */
articoloInArrivo.addEventListener("change", () => {
  if (articoloInArrivo.checked) {
    dataArrivoArticolo.disabled = false;
  } else {
    dataArrivoArticolo.disabled = true;
  }
});
/* Copio l'articolo da codice articolo fornitore a codice articolo */
btnCopia.addEventListener("click", () => {
  if (
    codiceArticoloFornitore.value === 0 ||
    !isNaN(codiceArticoloFornitore.value)
  ) {
    alert("Non c'è nulla da copiare quì !");
  } else {
    codiceArticolo.value = codiceArticoloFornitore.value;
  }
});

function salvaInStorage(forms) {
  /* articolo=new Articolo(nome.value, fornitore.value, codiceArticoloFornitore.value, dataRegistrazioneProdotto.value, dataScadenzaProdotto.value, codiceEanUpc.value,categoriaMerce.value, sedeMagazzino.value,ubicazioneMagazzino.value, marca.value, espressionePeso.value, peso.value, esporta.checked, giacenza.value, scortaMinima.value, quantitivoMinimoOrdinabile.value, quantitativoPerOgniCollo.value, comments.value ); */
  lista.push({
    nome: nome.value,
    fornitore: fornitore.value,
    codiceArticoloFornitore: codiceArticoloFornitore.value,
    codiceArticolo: codiceArticolo.value,
    dataRegistrazioneProdotto: dataRegistrazioneProdotto.value,
    dataScadenzaProdotto: dataScadenzaProdotto.value,
    codiceEanUpc: codiceEanUpc.value,
    categoriaMerce: categoriaMerce.value,
    sedeMagazzino: sedeMagazzino.value,
    ubicazioneMagazzino: ubicazioneMagazzino.value,
    marca: marca.value,
    espressionePeso: espressionePeso.value,
    peso: peso.value,
    scortaMinima: scortaMinima.value,
    esporta: esporta.checked,
    comments: comments.value,
    giacenza: giacenza.value,
    quantitativoMinimoOrdinabile: quantitativoMinimoOrdinabile.value,
    quantitativoPerOgniCollo: quantitativoPerOgniCollo.value,
  });

  validazioneCampi.innerHTML = "";
  localStorage.setItem("myForm", JSON.stringify(lista));
  madeAlert("Articolo salvato correttamente", "success");
  stampaLista();
}

function stampaLista() {
  let listaTxt = document.getElementById("lista");
  let lista_due_txt = document.getElementById("lista_due");
  let elenco = "";
  let elenco_due = "";
  lista.forEach((el) => {
    elenco += `<tr class="align-bottom"><td>${el.nome}</td><td>${el.fornitore}</td><td>${el.codiceArticoloFornitore}</td><td>${el.codiceArticolo}</td><td>${el.dataRegistrazioneProdotto}</td>
            <td>${el.dataScadenzaProdotto}</td><td>${el.codiceEanUpc}</td><td>${el.categoriaMerce}</td><td>${el.sedeMagazzino}</tr>`;
  });

  lista.forEach((el) => {
    elenco_due += `<tr></td>
        <td>${el.ubicazioneMagazzino}</td><td>${el.marca}</td><td>${el.espressionePeso}</td>
        <td>${el.peso}</td><td>${el.giacenza}</td><td>${el.scortaMinima}</td><td>${el.quantitativoMinimoOrdinabile}</td><td>${el.quantitativoPerOgniCollo}</td><td>${el.comments}</td></tr>`;
  });

  listaTxt.innerHTML = elenco;
  lista_due_txt.innerHTML = elenco_due;
  stampaEtichetta();
}

madeAlert = (message, type) => {
  const alertPlaceholder = document.getElementById("alertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

(() => {
  "use strict";
  const inviaForm = document.getElementById("inviaForm");
  Array.from(forms).forEach((form) => {
    inviaForm.addEventListener(
      "click",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          validazioneCampi.innerHTML =
            "I campi contrassegnati in rosso, sono richiesti!";
          form.classList.add("was-validated");
        } else {
          stampaEtichetta();
          salvaInStorage();
          document.forms[0].reset();
          form.classList.remove("was-validated");
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      },
      false
    );
  });
})();

function stampaEtichetta() {
  let dataEtichetta = document.getElementById("data");
  let labelNome = document.getElementById("labelNome");
  let etichNome = document.getElementById("etichNome");
  let labelFornitore = document.getElementById("labelFornitore");
  let etichForn = document.getElementById("etichForn");
  let labelCodArtForn = document.getElementById("labelCodArtForn");
  let letichCodArtForn = document.getElementById("etichCodArtForn");
  let labelcodArt = document.getElementById("labelcodArt");
  let etichCodeArt = document.getElementById("etichCodeArt");
  let labelDataReg = document.getElementById("labelDataReg");
  let etichDataReg = document.getElementById("etichDataReg");
  let labelDataScad = document.getElementById("labelDataScad");
  let etichDataScad = document.getElementById("etichDataScad");
  let labelCodEanPuc = document.getElementById("labelCodEanPuc");
  let etichCodeEanPuc = document.getElementById("etichCodeEanPuc");
  let labelCatMerc = document.getElementById("labelCatMerc");
  let etichCategMerc = document.getElementById("etichCategMerc");
  let labelSedemagaz = document.getElementById("labelSedemagaz");
  let etichSedeMagaz = document.getElementById("etichSedeMagaz");
  let labelUbMagaz = document.getElementById("labelUbMagaz");
  let etichUbicMagaz = document.getElementById("etichUbicMagaz");
  let labelMarca = document.getElementById("labelMarca");
  let etichMarca = document.getElementById("etichMarca");
  let labelUnMis = document.getElementById("labelUnMis");
  let etichUnMis = document.getElementById("etichUnMis");
  let labelPeso = document.getElementById("labelPeso");
  let etichPeso = document.getElementById("etichPeso");
  let labelGiacenza = document.getElementById("labelGiacenza");
  let etichGiac = document.getElementById("etichGiac");
  let labelScortaMin = document.getElementById("labelScortaMin");
  let etichScortaMin = document.getElementById("etichScortaMin");
  let labelMinimoVend = document.getElementById("labelMinimoVend");
  let etichMinVend = document.getElementById("etichMinVend");
  let labelQuantCollo = document.getElementById("labelQuantCollo");
  let etichQuantitCollo = document.getElementById("etichQuantitCollo");
  let labelNote = document.getElementById("labelNote");
  let etichNote = document.getElementById("etichNote");

  dataEtichetta.innerHTML = new Date().toLocaleDateString();

  labelNome.innerHTML = "Nome";
  etichNome.innerHTML = nome.value;
  labelFornitore.innerHTML = "Fornitore";
  etichForn.innerHTML = fornitore.value;
  labelCodArtForn.innerHTML = "Cod.Art.Fornitore";
  letichCodArtForn.innerHTML = codiceArticoloFornitore.value;
  labelcodArt.innerHTML = "Cod.Articolo";
  etichCodeArt.innerHTML = codiceArticolo.value;
  labelDataReg.innerHTML = "Data Reg.Prod.";
  etichDataReg.innerHTML = dataRegistrazioneProdotto.value;
  labelDataScad.innerHTML = "Data Scad.Prod.";
  etichDataScad.innerHTML = dataScadenzaProdotto.value;
  labelCodEanPuc.innerHTML = "Cod.Ean.Puc";
  etichCodeEanPuc.innerHTML = codiceEanUpc.value;
  labelCatMerc.innerHTML = "Categoria Merce";
  etichCategMerc.innerHTML = categoriaMerce.value;
  labelSedemagaz.innerHTML = "Sede magazzino";
  etichSedeMagaz.innerHTML = sedeMagazzino.value;
  labelUbMagaz.innerHTML = ubicazioneMagazzino.value;
  etichUbicMagaz.innerHTML = ubicazioneMagazzino.value;
  labelMarca.innerHTML = "Marca";
  etichMarca.innerHTML = marca.value;
  labelUnMis.innerHTML = "Un.di Misura";
  etichUnMis.innerHTML = espressionePeso.value;
  labelPeso.innerHTML = "Peso";
  etichPeso.innerHTML = peso.value;
  labelGiacenza.innerHTML = "Giacenza";
  etichGiac.innerHTML = giacenza.value;
  labelScortaMin.innerHTML = "Scorta minima";
  etichScortaMin.innerHTML = scortaMinima.value;
  labelMinimoVend.innerHTML = "Minimo vendibile";
  etichMinVend.innerHTML = quantitativoMinimoOrdinabile.value;
  labelQuantCollo.innerHTML = "Quantità collo";
  etichQuantitCollo.innerHTML = quantitativoPerOgniCollo.value;
  labelNote.innerHTML = "Note";
  etichNote.innerHTML = comments.value;
}
