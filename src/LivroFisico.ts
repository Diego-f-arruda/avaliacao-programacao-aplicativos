import Livro from "./Livro";


export default class LivroFisico extends Livro{
    private numeroPaginas: number;

    constructor(titulo: string, Autor: string, isbn: string, numeroPaginas: number){
        super(titulo, Autor, isbn)
        this.numeroPaginas = numeroPaginas
    }

    public override exibirDetalhes(){
        console.log(LivroFisico)
    }
}