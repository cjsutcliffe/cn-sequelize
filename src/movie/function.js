const Movie = require("./movie");

exports.createMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        const results = await Movie.findAll({}); 
        for (let index = 0; index < results.length; index++) {
          const element = results[index];
          console.log(`${element.title} Staring ${element.actor} Directed by ${element.director}`);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateActor = async (yargsInput) => {
    try {
        const newActor = await Movie.findOne({ where: { title : yargsInput.title } });
        if (newActor) {
          newActor.actor= yargsInput.actor
          await newActor.save();
          console.log ("Updated Movie Actor Successfully");
        } else {
          console.log("Movie not found");
        } 
    } catch (error) {
        console.log(error);
    }
};

exports.updateDirector = async (yargsInput) => {
    try {
        const newDirector = await Movie.findOne({ where: { title : yargsInput.title } });
        if (newDirector) {
          newDirector.director= yargsInput.director
          await newDirector.save();
          console.log ("Updated Movie Director Successfully");
        } else {
          console.log("Movie not found");
        }
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (yargsInput) => {
    try {
        const deleteMovie = await Movie.findOne({ where: { title : yargsInput.title } });
        if (deleteMovie ) {
          deleteMovie.title= yargsInput.title
          await deleteMovie.destroy();
          console.log("Movie Successfully Deleted")
        } else {
          console.log("Movie not found");
        }  
    } catch (error) {
        console.log(error);
    }
};