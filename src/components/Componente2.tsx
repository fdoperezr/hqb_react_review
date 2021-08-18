import React from 'react'
import {
    Link
} from 'react-router-dom';
const Componente2 = () => {
    return (
        <div>
            Soy el componente 2
            <Link to={'/'}>
                <button>Ir a Inicio</button>
            </Link>
        </div>
    )
}

export default Componente2;
