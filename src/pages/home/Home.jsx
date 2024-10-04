import "./home.css";


import SeccionHome from "../../components/seccionHome/SeccionHome";
import BuscadorRecetas from "../../components/buscadorRecetas/BuscadorRecetas";
// import Aside from "../../components/aside/Aside"


const Home = () => {
    return (<>
        <div className="home">
            <BuscadorRecetas />
            <SeccionHome />
        </div>
    </>
    )
}

export default Home;