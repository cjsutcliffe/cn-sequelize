const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");

const Actor = sequelize.define("Actor", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    wiki: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
        unique: false,
    }
  }
);

module.exports = Actor;