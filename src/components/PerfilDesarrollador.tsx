import React from 'react'

export default function PerfilDesarrollador(props: {nombre: string, edad: number, tienePantalla: boolean}) {
    return (
        <div>
            Nombre: { props.nombre } <br />
            Edad: { props.edad } <br />
            { props.tienePantalla ? "Tiene pantalla": "No tiene pantalla" }
        </div>
    )
}
