import "./aside.css";



const Aside = () => {
    return <aside className="aside">
        <div>
            <h4>Buscador</h4>
            <input type="text" placeholder="busqueda"/>
        </div>
        <div>
            <h4>Secciones</h4>
            <ul>
                <li>pastas</li>
                <li>carnes</li>
                <li>postres</li>
                <li>vegana</li>
                <li>vegetariana</li>
            </ul>
        </div>
    </aside>
}


export default Aside;