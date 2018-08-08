/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function () {

    console.log('conecto no banco');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017, //porta de conexão
            {} // configurações opcionais
        ),
        {}// configurações opcionais
    );

    return db;

}

module.exports = function () {

    return connMongoDB;

}