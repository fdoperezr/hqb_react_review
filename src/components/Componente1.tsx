import React from 'react'
import {
    Link
} from 'react-router-dom';

const Componente1 = () => {
    return (
        <div>
            Soy el componente 1
            <Link to={'/'}>
                <button>Ir a Inicio</button>
            </Link>
        </div>
    )
}

export default Componente1;
