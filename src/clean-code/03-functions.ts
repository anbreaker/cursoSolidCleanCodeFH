(() => {
  // function to obtain information about a movie by Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // function to get information about the actors in a movie - Actors or Cast // id = movieId getMovieCast
  function getMovieCastByMovieId(movieId: string) {
    console.log({ id: movieId });
  }

  // function to obtain the actor's bio for the id
  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  // Create a movie
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Create a new actor
  function checkFullName(fullName: string) {
    console.log({ fullName });

    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  // Bad example
  /*
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
  
    let result: number;

    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };
  */

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
