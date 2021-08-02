import React, { useState } from 'react'


export default function Bienvenida() {
    const [flag, setflag] = useState<boolean>(false);

    const handleOnClick = () => {
        setflag(!flag);
    }

    return (
        <div>
            {
                !flag ?
                    <> <h1>¡¡Bienvenid@!!</h1>
                        <button onClick={handleOnClick}>Salir</button></>
                    :
                    <><h1>Adiós</h1>
                        <button onClick={handleOnClick}>Entar</button></>
            }
        </div>
    )
}
