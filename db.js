const d = require('d');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('db-url');

const todo = require('./model/todo.js')(sequelize, Sequelize);

const db = {
    Sequelize,
    sequelize,
    todo
}

db.sequelize.sync({ force: true });

module.exports = db;