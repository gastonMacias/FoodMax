
import { useState, useEffect } from "react";
import "./carrousel.css";
import { useRecetas } from "../../context/RecetasContext";

const Carrousel = () => {
    const recetas = useRecetas();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === recetas.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [recetas]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? recetas.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === recetas.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button onClick={goToPrev} className="nav prev">◀</button>

            {recetas.length > 0 && (
                <img
                    src={recetas[currentIndex].imagen}
                    alt={`Slide ${currentIndex + 1}`}
                />
            )}

            <button onClick={goToNext} className="nav next">▶</button>
        </div>
    );
};

export default Carrousel;
