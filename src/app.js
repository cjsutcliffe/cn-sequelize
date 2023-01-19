const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const { createMovie, listMovies, updateActor, updateDirector, deleteMovie } = require("./movie/function");
const Movie = require("./movie/movietable");
const Actor = require("./movie/actortable")

async function app(yargsInput) {
    await sequelize.sync({alter:true});
    if (yargsInput.create) {
        //Place code to create a movie here - DONE!
        await createMovie({
            title: yargsInput.title,
            actor: yargsInput.actor,
            director: yargsInput.director
        });
    } else if (yargsInput.read) {
        //Place code to list all our movies here
        await listMovies();
    } else if (yargsInput.updateActor) {
        //Place code to update actor field here
        await updateActor(yargsInput);
    } else if (yargsInput.updateDirector) {
        //Place code to update director field here
        await updateDirector(yargsInput);
    } else if (yargsInput.delete) {
        //Place code to delete a movie from our table here
        await deleteMovie(yargsInput);
    } else {
        console.log("Unrecognised Yargs command");
    }
    await sequelize.close();
}

app(yargs.argv);