import React from 'react';

export type ComponenteFuncionalProps = {
    numero1: number,
    numero2: number
}

export default function ComponenteFuncional(props: ComponenteFuncionalProps) {
    const handleSumar = () => {
        alert(props.numero1 + props.numero2);
    }

    const handleRestar = () => {
        alert(props.numero1 - props.numero2);
    }
    return (
        <React.Fragment>
            <div>
                {`Número 1: ${props.numero1} Número 2: ${props.numero2}`}
                <br />
                <button onClick={handleSumar}>Sumar</button>
                <button onClick={handleRestar}>Restar</button>
            </div>
        </React.Fragment>
    )
}
