import React from 'react'

const Componente1 = () => {
    const [numeroRandom, setNumeroRandom] = React.useState<number>();
    const [numeroInput, setNumeroInput] = React.useState<any>();
    const [procesando, setProcesando] = React.useState<boolean>(false);

    React.useEffect(() => {
        generarNumeroRandom();
    }, []);

    const generarNumeroRandom = () => {
        const _numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;
        console.log("el número es: ", _numeroRandom);
        setNumeroRandom(_numeroRandom);
        
    };

    const adivinarNumero = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isNaN(numeroInput)){
                    return reject(new Error('Valor debe ser numérico'));
                }
                const _numeroInput: number = Number(numeroInput);
                return resolve(_numeroInput === numeroRandom);
            }, 4000)
        })
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setNumeroInput(event.target.value);
    };

    const onClick = () => {
        setProcesando(true);
        adivinarNumero()
        .then(response => {
            if (response){
                alert('¡adivinaste!');
            }
            else{
                alert('no adivinaste :(');
            }
            
        })
        .catch(error => alert(error))
        .finally(() => {
            setProcesando(false);
            setNumeroInput('');
        })
    };


    return (
        <div>
            Ingresar un número de 1 a 10
           <input type="text" onChange={onChange} value={numeroInput} placeholder={'Ingresar número'}/>
           <button type={'button'} onClick={onClick} disabled={procesando}>Adivinar</button>
           <br/>
           {
               procesando &&
               <h2>Procesando datos...</h2>
           }
        </div>
    )
}

export default Componente1;
