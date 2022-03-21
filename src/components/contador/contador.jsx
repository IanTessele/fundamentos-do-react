import { Component } from "react";
import "./contador.css"

export default class Contador extends Component {

    state = {
        valorContador: 0,
        valor: 1,
    }

    LessContador = () => {
        this.setState({
            valorContador: this.state.valorContador - this.state.valor,
        });
    }

    PlusContador = () => {
        this.setState({
            valorContador: this.state.valorContador + this.state.valor,
        });
    }

    setValor = (props) => {
        this.setState({
            valor: +props.target.value,
        });
    }

    render() {
        return (
            <div className="contador">
                <div>valor</div>
                <div>{this.state.valorContador}</div>
                <div>
                    <button className="button" onClick={this.LessContador}>-</button>
                    <input className="input" onChange={this.setValor} placeholder="digite um valor" />
                    <button className="button" onClick={this.PlusContador}>+</button>
                </div>
            </div>
        );
    }

}
