import CreateActor from "../pages/actors/CreateActor"
import EditActor from "../pages/actors/EditActor"
import IndexActor from "../pages/actors/IndexActor"
import CreateGenres from "../pages/genres/CreateGenres"
import EditGenres from "../pages/genres/EditGenres"
import IndexGenres from "../pages/genres/IndexGenres"
import landingPage from "../pages/LandingPage/LandingPage"
import CreateMovie from "../pages/movies/CreateMovie"
import EditMovie from "../pages/movies/EditMovie"
import IndexMovie from "../pages/movies/IndexMovie"
import CreateMovieTheaters from "../pages/moviestheaters/CreateMovieTheater"
import EditMovieTheaters from "../pages/moviestheaters/EditMovieTheater"
import IndexMovieTheaters from "../pages/moviestheaters/IndexMovieTheaters"

        // You got live your dream, but some people.... are you hungry for that dream 
        // let the lion out , 
        // got hunt your dream, you can live your live your life 
        // when life hit you up ..... you can do more if you believe
const routes = [
    {
        path: '/genres',component:IndexGenres
    },
    {
        path: '/', component:landingPage,exact:true
    },
   {
         path:"/genres/create", component:CreateGenres
     },
     {
         path:"/genres/edit", component:EditGenres,

     },
     {
        path: '/actors',component:IndexActor,exact:true
    },
    {
    },
   {
         path:"/actor/create", component:CreateActor
     },
     {
         path:"/actor/edit", component:EditActor

     },
     {
        path: '/movietheaters',component:IndexMovieTheaters,exact:true
    },
    {
    },
   {
         path:"/movietheaters/create", component:CreateMovieTheaters
     },
     {
         path:"/movietheaters/edit", component:EditMovieTheaters

     },
     {
        path: '/movies',component:IndexMovie,exact:true
    },
    {
    },
   {
         path:"/movie/create", component:CreateMovie
     },
     {
         path:"/movie/edit", component:EditMovie

     }
]

export default routes