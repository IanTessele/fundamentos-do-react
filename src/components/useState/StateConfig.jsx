import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const [value, setValue] = useState(0);
    const [text, setText] = useState('false');

    function AddValue() {
        return setValue((value + 1));
    }

    return (
        <div>

            <div>{value}</div>
            <div>
                <strong>
                    <button onClick={AddValue}>
                        ADD +1
                    </button>
                </strong>
            </div>

        </div>
    );
}