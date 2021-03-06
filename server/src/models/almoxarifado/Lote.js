'use strict';

require('dotenv').config();

const { DB_CONNECTION, DB_HOST, DB_POST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_CONNECTION,
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

const Lote = sequelize.define('lote', {
    numeroLote: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idContrato: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'contrato'
            },
            key: 'id'
        }
    },
    valorLote: {
        type: Sequelize.DOUBLE(8, 2),
        allowNull: false
    },
    valorConsumido: {
        type: Sequelize.DOUBLE(8, 2),
        allowNull: false
    },
    situacao: { // 0 - Inativo, 1 - Ativo
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    idFornecedor: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'fornecedor'
            },
            key: 'id'
        }
    }
},
{
  charset: 'utf8',
  collate: 'utf8_general_ci',
  freezeTableName: true,
  tableName: 'lote'
});

Lote.addHook('beforeValidate', (lote, options) => {
    var data = new Date();
    let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
    var data = data2.toISOString().replace(/\.\d{3}Z$/, '');
    lote.updatedAt = data;
});

Lote.sync({
    force: false
});

module.exports = Lote;
