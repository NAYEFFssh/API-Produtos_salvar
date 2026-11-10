const produtoModel = require('../models/produtoModel')

const produtoController = {
    criarProduto: (req, res) =>{
        const { codigo, nome, qtda, preco } = req.body;
        // validaçao simples dos campos obrigatorios
        if(!codigo || !nome || !qtda || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtda, preco) sao obrigatorios"
            })
        }

        //transformar e calcular todos os dados
        const nomeMaiusculo = String(nome).toUpperCase();
        const quantidade = Number(qtda);
        const valorPreco = Number(preco);
        const valorTotal = quantidade * valorPreco;

        const novoProduto = {
            codigo,
            nome: nomeMaiusculo,
            quantidade: quantidade,
            preco: valorPreco,
            total:valorTotal,
            criadoEm: new Date().toDateString()
        }

        // chama o model para persistir o arquivo 
        const produtoSalvo = produtoModel.salvar(novoProduto)

        // retorna a resposta HTTP 201 (created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Produto recebido com sucesso!",
            produto: produtoSalvo
        })
    },
    listarProdutos: (req,res) =>{
        const produtos = produtoModel.buscarTodos();
        return res.json({
            sucesso: true,
            total: produtos.length,
            produtos
        })
    }

};

module.exports = produtoController;