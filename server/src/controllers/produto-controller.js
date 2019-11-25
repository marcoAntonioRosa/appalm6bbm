'use strict';
const Helpers = require("./../../helpers/helpers");
const Produto = require('./../models/Produto');
const CategoriaProduto = require('./../models/CategoriaProduto');

exports.get = (req, res, next) => {
    const id = req.params.id;
    Produto.findAll().then(response => {
        var find = [];
        var data = JSON.parse(JSON.stringify(response));
        for(var i = 0; i < data.length; i++){
            if(data[i].id == id) {
                find = data[i] ;
                break;
            }
        }

        res.status(200).json(find);
    });

}

exports.getAll = (req, res, next) => {
    Produto.findAll().then(response => {
        var produtos = JSON.parse(JSON.stringify(response));
        CategoriaProduto.findAll().then(response => {
            var categorias = JSON.parse(JSON.stringify(response));
            produtos.forEach(element => {
                for(var i = 0; i < categorias.length; i++) {
                    if(element.idCategoriaProduto == categorias[i].id) {
                        element.categoria = categorias[i].categoria;
                    }
                }
            });

            res.status(200).json(produtos);
        });
    });
    
}

exports.post = (req, res, next) => {
    var codigoBarras = req.body.codigoBarras;
    var produto = req.body.produto;
    var descricao = req.body.descricao;
    var observacoes = req.body.observacoes;
    var unidadeMedida = req.body.unidadeMedida;
    var qtdEstoque = req.body.qtdEstoque;
    var qtdMinima = req.body.qtdMinima;
    var idCategoriaProduto = req.body.idCategoriaProduto;
    var localizacao = req.body.localizacao;
    var armario = req.body.armario;
    var imagem = req.body.imagem;


    var data = {
        codigoBarras: codigoBarras,
        produto: produto,
        descricao: descricao,
        observacoes: observacoes,
        unidadeMedida: unidadeMedida,
        qtdEstoque: qtdEstoque,
        qtdMinima: qtdMinima,
        idCategoriaProduto: idCategoriaProduto,
        localizacao: localizacao,
        armario: armario,
        imagem: imagem,
        createdAt: Helpers.getDataHoraAtual()
    };

    Produto.create(data).then(response => {
        res.status(200).json(response);
    });
}


exports.update = (req, res, next) => {
    var id = req.body.id;
    var codigoBarras = req.body.codigoBarras;
    var produto = req.body.produto;
    var descricao = req.body.descricao;
    var observacoes = req.body.observacoes;
    var unidadeMedida = req.body.unidadeMedida;
    var qtdEstoque = req.body.qtdEstoque;
    var qtdMinima = req.body.qtdMinima;
    var idCategoriaProduto = req.body.idCategoriaProduto;
    var localizacao = req.body.localizacao;
    var armario = req.body.armario;
    var imagem = req.body.imagem;


    var data = {
        codigoBarras: codigoBarras,
        produto: produto,
        descricao: descricao,
        observacoes: observacoes,
        unidadeMedida: unidadeMedida,
        qtdEstoque: qtdEstoque,
        qtdMinima: qtdMinima,
        idCategoriaProduto: idCategoriaProduto,
        localizacao: localizacao,
        armario: armario,
        imagem: imagem,
        createdAt: Helpers.getDataHoraAtual()
    };

    Produto.update(data, {
        where: {
            id: id
        }
    }).then(response => {
        res.status(200).json(response);
    });
}

exports.delete = (req, res, next) => {
    var id = req.params.id;
    Produto.destroy({
        where: {
            id: id
        }
    }).then(response => {
        res.status(200).json(response);
    });
}
