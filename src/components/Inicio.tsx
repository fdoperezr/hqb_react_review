import React from 'react'
import {
    Link
} from 'react-router-dom';

const Inicio = () => {
    return (
        <div>
            <Link to={'/componente1'}>
                <button>Ir a Componente1</button>
            </Link>
            <Link to={'/componente2'}>
                <button> Ir a Componente2</button>
            </Link>
        </div>
    )
}

export default Inicio
