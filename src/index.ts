import leia from "readline-sync";
import Biblioteca from "./Biblioteca";

var rachaCuca = new Biblioteca();

var opcao = 0;
do{
    console.log("---------------------ESCOLHA SUA OPCAO---------------------");
    opcao = leia.keyInSelect(["Adicionar Livro", "Remover Livro", "Buscar Livro", "Mostrar detalhes do Livro"]) + 1;

    switch(opcao){
        case 1:
            rachaCuca.adicionarLivro();
            break;

        case 2:
            rachaCuca.removerLivro();
            break;

        case 3:
            rachaCuca.buscarLivro();
            break;

        case 4:
            rachaCuca.mostrarDetalhes();
            break;
    }

}while(opcao !== 0)

