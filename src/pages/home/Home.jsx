import "./home.css";


import SeccionHome from "../../components/seccionHome/SeccionHome";
import Aside from "../../components/aside/Aside"


const Home = () => {
    return (<>
        <div className="home">
            <Aside />
            <SeccionHome />
        </div>
    </>
    )
}

export default Home;