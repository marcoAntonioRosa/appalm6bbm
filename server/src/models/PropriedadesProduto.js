'use strict';

const env = require('./../../config/env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_CONNECTION,
    dialectOptions: {
        useUTC: false,
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
              return new Date(field.string() + 'Z');
            }
            return next()
        }
    },
    timezone: '-03:00'
});

sequelize.authenticate().then(function() {
    console.log("successo");
}).catch(function(erro) {
    console.log("error: " + erro);
});

const PropriedadeProduto = sequelize.define('propriedadeproduto', {
    idProduto: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'produto'
            },
            key: 'id'
        }
    },
    tamanho: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtdEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qtdMinima: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
  charset: 'utf8',
  collate: 'utf8_general_ci',
  freezeTableName: true,
  tableName: 'propriedadeproduto'
});

PropriedadeProduto.addHook('beforeValidate', (propriedadeproduto, options) => {
    var data = new Date();
    let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
    var data = data2.toISOString().replace(/\.\d{3}Z$/, '');
    propriedadeproduto.updatedAt = data;
});

PropriedadeProduto.sync({
    force: false
});

module.exports = PropriedadeProduto;