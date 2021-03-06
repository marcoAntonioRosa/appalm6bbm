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

const ItemSaida = sequelize.define('itemsaida', {
    idSaida: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'saida'
            },
            key: 'id'
        }
    },
    idProduto:{
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'produto'
            },
            key: 'id'
        }
    },
    idPropriedadeProduto: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'propriedadeproduto'
            },
            key: 'id'
        }
    },
    qtdSaida: {
        type: Sequelize.DOUBLE(8,2),
        allowNull: false
    }
},
{
  charset: 'utf8',
  collate: 'utf8_general_ci',
  freezeTableName: true,
  tableName: 'itemsaida'
});

ItemSaida.addHook('beforeValidate', (itemsaida, options) => {
    var data = new Date();
    let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
    var data = data2.toISOString().replace(/\.\d{3}Z$/, '');
    itemsaida.updatedAt = data;
});

ItemSaida.sync({
    force: false
});

module.exports = ItemSaida;
