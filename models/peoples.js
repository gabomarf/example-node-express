var Sequelize = require('sequelize');

var sequelize = module.parent.exports.sequelize;
//var sequelize = new Sequelize('database', '', '',  { storage: 'db/database.sqlite', dialect: 'sqlite'});

var People = sequelize.define('Peoples', {
	id      : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
	name      : Sequelize.TEXT,
	description       : Sequelize.TEXT
},{
	timestamps: false
});

module.exports = People;