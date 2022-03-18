// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const isPar = props.numero % 2 === 0;
    return (
        <div>
            <div> o numero {props.numero} é </div>
            {isPar ?
                <strong>Par</strong> :
                <strong>Impar</strong>
            }
        </div>
    );
}