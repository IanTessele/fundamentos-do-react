// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const calc = Math.random() * (props.max - props.min) + props.min;
    const calInt = Math.floor(calc);
    const result = calInt >= 7 ? "aprovado" : "reprovado";
    const passou = {
        color: "green",
    };
    const reprovou = {
        color: "red",
    };
    const styleFinal = calInt >= 7 ? passou : reprovou;
    return (
        <div>
            <div> {calInt}</div>
            <strong style={styleFinal}> {result} </strong>
        </div>
    );
}