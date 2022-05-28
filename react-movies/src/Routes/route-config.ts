import CreateGenres from "../pages/genres/CreateGenres"
import EditGenres from "../pages/genres/EditGenres"
import IndexGenres from "../pages/genres/IndexGenres"
import landingPage from "../pages/LandingPage/LandingPage"

        // You got live your dream, but some people.... are you hungry for that dream 
        // let the lion out , 
        // got hunt your dream, you can live your live your life 
        // when life hit you up ..... you can do more if you believe
const routes = [
    {
        path: '/genres',component:IndexGenres,exact:true
    },
    {
        path: '/', component:landingPage,exact:true
    }
    // {
    //     path:"/genres/create", component:CreateGenres
    // },
    // {
    //     path:"/genres/edit", component:EditGenres, exact:true

    // }
]

export default routes