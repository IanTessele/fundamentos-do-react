// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <div>
            <h2>
                <span>
                    {props.nome} <strong>
                        {props.sobrenome}</strong>
                </span>
            </h2>
        </div>
    );
}