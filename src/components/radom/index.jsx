// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const calc = Math.random() * (props.max - props.min) + props.min;
    const calInt = Math.floor(calc);
    const result = calInt >= 7 ? "aprovado" : "reprovado";

    return (
        <>
            <strong> {calInt}</strong>
            <strong> {result}</strong>
        </>
    );
}