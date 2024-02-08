export class Articolo {
    nome;
    fornitore;
    codiceArticoloFornitore;
    codiceArticolo;
    dataRegistrazioneProdotto;
    dataScadenzaProdotto;
    codiceEanUpc;
    categoriaMerce;
    sedeMagazzino;
    ubicazioneMagazzino;
    espressionePeso;
    marca;
    peso;
    comments;
    giacenza;
    scortaMinima;
    quantitativoMinimoOrdinabile;
    quantitativoPerOgniCollo;

    constructor(_nome,_fornitore,  _codiceArticolo, _dataRegistrazioneProdotto,_dataScadenzaProdotto, _codiceEanUpc,_categoriaMerce,
        _sedeMagazzino,_ubicazioneMagazzino,_espressionePeso,_marca,_peso,_comments,_giacenza,_scortaMinima,_quantitativoMinimoOrdinabile, _quantitativoPerOgniCollo, _codiceArticoloFornitore){
            this.nome=nome;
            this.fornitore=fornitore;
            this.codiceArticolo= codiceArticolo;
            this.dataRegistrazioneProdotto= dataRegistrazioneProdotto;
            this.dataScadenzaProdotto= dataScadenzaProdotto;
            this.codiceEanUpc= codiceEanUpc;
            this.categoriaMerce= categoriaMerce;
            this.sedeMagazzino= sedeMagazzino;
            this.ubicazioneMagazzino= ubicazioneMagazzino;
            this.espressionePeso= espressionePeso;
            this.marca=marca;
            this.peso=peso;
            this.comments=comments;
            this.giacenza=giacenza;
            this.scortaMinima=scortaMinima;
            this.quantitativoMinimoOrdinabile=quantitativoMinimoOrdinabile;
            this.quantitativoPerOgniCollo=quantitativoPerOgniCollo;
            this.codiceArticoloFornitore= codiceArticoloFornitore;
            
        }

}