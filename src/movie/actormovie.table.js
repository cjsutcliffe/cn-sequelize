const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");
const Movie = require("./movie/movietable");
const Actor = require("./actor/movietable");

const ActorMovie = sequelize.define("ActorMovie")
//what does this table need to contain if anything?

Actor.belongsToMany (title, {through: 'Movie'});
Title.hasMany (actor, {through: 'Actor'});