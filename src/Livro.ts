

export default class Livro{

    constructor(titulo: string, Autor: string, isbn: string){
        this.titulo = titulo;
        this.Autor = Autor;
        this.isbn = isbn;
    }

    private titulo: string;
    private Autor: string;
    private isbn: string;


    public exibirDetalhes(){

    }

    public getTitulo(){
        return this.titulo;
    }

    public getAutor(){
        return this.Autor;
    }

    public getIsbn(){
        return this.isbn;
    }
}


