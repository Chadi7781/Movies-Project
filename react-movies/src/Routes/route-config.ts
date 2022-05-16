import IndexGenres from "../components/navbar/IndexGenres"
import landingPage from "../pages/LandingPage/LandingPage"

const routes = [
    {
        path: '/genres',component:IndexGenres,exact:true
    },
    {
        path: '/', component:landingPage,exact:true
    }
]

export default routes