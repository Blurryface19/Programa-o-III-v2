const endereco = "mongodb://localhost:27017/loja";
const mongoose = require('mongoose');

mongoose.connect(endereco, {userNewUrlParser: true});
mangoose.set('useFindAndModify', false);

module.exports = mongoose;