import { useState } from "react";
import './input.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [textInput, setText] = useState('')

    function TextInput(props) {
        return (setText(props.target.value));
    }

    return (
        <div className="main">
            <div className="PerfilCard" >
                <div className="perfil" />
                <div className="name">
                    <div><strong>{textInput}</strong></div>
                </div>
            </div>
            <input className="input" onChange={TextInput} placeholder="🤔 digite algo 🤔" />

        </div>
    );
}