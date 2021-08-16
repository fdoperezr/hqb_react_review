import React from 'react';


export type ComponenteDeClaseProps = {
    numero1: number,
    numero2: number
}

export default class ComponenteDeClase extends React.Component<ComponenteDeClaseProps> {
    render() {
        return (
            <React.Fragment>
                <div>
                    {`Número 1: ${this.props.numero1} Número 2: ${this.props.numero2}`}
                    <br />
                    <button onClick={this.handleSumar}>Sumar</button>
                    <button onClick={this.handleRestar}>Restar</button>
                </div>
            </React.Fragment>
        )
    }

    handleSumar = () => {
        alert(this.props.numero1 + this.props.numero2);
    }

    handleRestar = () => {
        alert(this.props.numero1 - this.props.numero2);
    }
}
