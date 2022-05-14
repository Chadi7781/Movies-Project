import React, { useEffect, useState } from 'react';
import './App.css';
import IndividualMovie from './components/movies/IndividualMovie';
import MoviesList from './components/movies/MoviesList';
import { landingPageDTO, movieDTO } from './model/movies.model';

export function App() {
  const [hide,setHide]= useState(false);

  const [movies, setMovies] = useState<landingPageDTO>({});


  useEffect(()=> {
    const timerId = setTimeout(()=> {

      setMovies ({
         inTheaters: [
          {
            id: 5,
            title: "spiderman",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 7,
            title: "Soul",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          
        ],
        upcomingReleases: [
    
          {
            id: 8,
            title: "Awled moufida",
            poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
        
      ]
        
      })


    },1000)

    return () =>clearTimeout(timerId);
  })

  

  return (
    <>
    <h3> In Theaters</h3>
    <MoviesList movies={movies.inTheaters}/>   

    <h3>Upcoming Releases</h3>

    <MoviesList movies={movies.upcomingReleases}/>   

    </>
  );
}

