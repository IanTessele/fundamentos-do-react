import { useEffect, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

    const [nameApp,setNameApp] = useState('React App');//para mudar o texto da pagina
    const [text,setText] = useState('');//para salvar o texto do input

    function UpadteTextInput(props) {
        setText(props.target.value)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function PressButton() {
        setNameApp(text);
    }

    useEffect(()=>{
        document.title = nameApp
    },[PressButton, nameApp]);


    return(
        <div>
            <input onChange={UpadteTextInput}/>
            <button onClick={PressButton}>Set Name APP</button>
        </div>
    );

}