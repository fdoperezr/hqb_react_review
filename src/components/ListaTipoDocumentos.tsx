import React from 'react'

import {TipoDocummentos} from '../data/TipoDocumentos'

export default function ListaTipoDocumentos() {
    return (
        <div>
            <h1>Tipo de documentos</h1>
            <h3>Nombres</h3>
           <ul>
               {
                   TipoDocummentos.map(x => 
                    <li key={x.id}>
                        {x.nombre}
                    </li>)
               }
           </ul>
        </div>
    )
}
