import Livro from "./Livro";
import leia from "readline-sync"
import LivroFisico from "./LivroFisico";
import Ebook from "./Ebook";

export default class Biblioteca {
    private livros: Array<Livro> = [];


    private save(livro: Livro) {
        this.livros.push(livro);
        console.log(`Livro adicionado ao acervo com sucesso!!!`);
    }
    
    public adicionarLivro() {
        console.log(`--------------------------------------------------------`);
        var titulo = leia.question(`Digite o nome do livro: `);
        var autor = leia.question(`Informe o autor do livro: `);
        var isbn = leia.question(`Informe o ISBN: `);
        
        console.log(`--------------------------------------------------------`);
        var tipoLivro = leia.keyInSelect(["Livro Fisico", "Ebook"]) + 1;
        
        var livro: Livro;
        if(tipoLivro === 1){
            var numeroPaginas = leia.questionInt(`Informe a quantidade de paginas do livro: `);
            livro = new LivroFisico(titulo, autor, isbn, numeroPaginas)
        }else{
            var tamanhoArquivo = leia.questionFloat(`Informe o tamanho do arquivo: `);
            livro = new Ebook(titulo, autor, isbn, tamanhoArquivo)
        }
        this.save(livro)
    }

    public removerLivro() {
        
        var livroExclusao = leia.question("Qual o ISBN do livro a ser removido: ");
        for(var i = 0; i < this.livros.length; i++){
            if(livroExclusao === this.livros[i].getIsbn()){
                this.livros.splice(i, 1);
                console.log(`O livro ${livroExclusao} foi excluido com sucesso!!`);
                return;
            }
        }
        
    }

    public buscarLivro() {
        var buscaIsbn = leia.question("Qual o ISBN a ser buscado: ")
        var iIsbn = this.livros.findIndex(livro => livro.getIsbn() === buscaIsbn);
        if(iIsbn === -1){
            console.log(`Este ISBN nao esta em nosso banco de dados!!`);
            return;
        }
        console.log(iIsbn);
    }

    public mostrarDetalhes(){
        console.table(this.livros);
    }


}
