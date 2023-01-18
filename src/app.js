const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const { createMovie } = require("./movie/function");

async function app(yargsInput) {
    await sequelize.sync({alter:true});
    if (yargsInput.create) {
        //Place code to create a movie here
        await createMovie({
            title: yargsInput.title,
            actor: yargsInput.actor,
            director: yargsInput.director
        })
    } else if (yargsInput.read) {
        //Place code to list all our movies here
    } else if (yargsInput.updateActor) {
        //Place code to update actor field here
    } else if (yargsInput.updateDirector) {
        //Place code to update director field here
    } else if (yargsInput.delete) {
        //Place code to delete a movie from our table here
    } else {
        console.log("Unrecognised Yargs command");
    }
}

app(yargs.argv);