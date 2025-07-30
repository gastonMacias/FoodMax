import "./home.css";


import SeccionHome from "../../components/seccionHome/SeccionHome";
import Carrousel from "../../components/carrousel/Carrousel";



const Home = () => {
    return (<>
        <div className="home">
            <Carrousel />
            <SeccionHome />
        </div>
    </>
    )
}

export default Home;