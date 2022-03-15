import RadomValue from './radom';

export default function WithParams(props) {
  return (
    <div>
      <h2>
        <strong> {props.aluno} </strong>
        tem a nota
        <RadomValue min={props.min} max={props.max} />
      </h2>
    </div>
  );
}
