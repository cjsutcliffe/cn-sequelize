const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const { createMovie } = require("./movie/function");
const Movie = require("./movie/movietable")

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
        const results = await Movie.findAll({}); 
        for (let index = 0; index < results.length; index++) {
          const element = results[index];
          console.log(`${element.title} Staring ${element.actor} Directed by ${element.director}`);
        }
    } else if (yargsInput.updateActor) {
        //Place code to update actor field here
        const newActor = await Movie.findOne({ where: { title : yargsInput.title } });
        if (newActor) {
          newActor.actor= yargsInput.actor
          await newActor.save();
          console.log ("Updated Movie Actor Successfully");
        } else {
          console.log("Movie not found");
        } 
    } else if (yargsInput.updateDirector) {
        //Place code to update director field here
        const newDirector = await Movie.findOne({ where: { title : yargsInput.title } });
        if (newDirector) {
          newDirector.director= yargsInput.director
          await newDirector.save();
          console.log ("Updated Movie Director Successfully");
        } else {
          console.log("Movie not found");
        }
    } else if (yargsInput.delete) {
        //Place code to delete a movie from our table here
        const deleteMovie = await Movie.findOne({ where: { title : yargsInput.title } });
        if (deleteMovie ) {
          deleteMovie.title= yargsInput.title
          await deleteMovie.destroy();
          console.log("Movie Successfully Deleted")
        } else {
          console.log("Movie not found");
        }  
    } else {
        console.log("Unrecognised Yargs command");
    }
    await sequelize.close();
}

app(yargs.argv);