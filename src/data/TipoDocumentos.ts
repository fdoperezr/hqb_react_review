import { Guid } from "guid-typescript"; 

export const TipoDocummentos: any[] =
    [
        {
            "id": Guid.create().toString(),
            "nombre": "CONTRATO",
        },
        {
            "id": Guid.create().toString(),
            "nombre": "LIQUIDACIÓN DE SUELDO",
        },
        {
            "id": Guid.create().toString(),
            "nombre": "VACACIONES",
        },
        {
            "id": Guid.create().toString(),
            "nombre": "DIA ADMINISTRATIVO",
        },
        {
            "id": Guid.create().toString(),
            "nombre": "COTIZACIONES",
        },
        {
            "id": Guid.create().toString(),
            "nombre": "ANEXO",
        }
    ]
