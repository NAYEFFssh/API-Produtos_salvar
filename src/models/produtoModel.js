// file system arquivo
const fs = require('fs');
//path = caminho
const path = require('path')

// 1. definir rota caminho
const arquivoProdutos = path.join(__dirname, '..', '..', 'database', 'produtos.json');

const produtoModel = {
    // 1. ler todos os produtos do arquivo json
    buscarTodos: () =>{
        if (!fs.readFileSync(arquivoProdutos, 'utf-8')){
            return [];
        }
    
        const conteudo = fs.readFileSync(arquivoProdutos, 'utf-8');
        return conteudo.trim() ? JSON.parse(conteudoTexto) : [];
    },

    // 2. salva um novo produto no arquivo JSON
    salvar: (novoProduto) =>{
        const listaProdutos = produtoModel.buscarTodos();

        // 3. adicionar o novo produto na lista
        listaProdutos.push(novoProduto);

        // 4. salvar
        fs.writeFileSync(arquivoProdutos, JSON.stringify(listaProdutos, null, 2));

        return novoProduto;
    }
};

module.exports = produtoModel