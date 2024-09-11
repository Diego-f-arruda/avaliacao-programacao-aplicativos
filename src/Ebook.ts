import leia from "readline-sync"
import Livro from "./Livro";


export default class Ebook extends Livro{
    private tamanhoArquivo: number;

    constructor(titulo: string, Autor: string, isbn: string, tamanhoArquivo: number){
        super(titulo, Autor, isbn)
        this.tamanhoArquivo = tamanhoArquivo
    }

    public override exibirDetalhes(){
        console.log(Ebook)
    }
}