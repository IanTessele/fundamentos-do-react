import RadomValue from './radom';

export default function WithParams(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>
        <strong> {props.aluno} </strong>
        tem a nota
        <RadomValue min={props.min} max={props.max} />
      </h2>
    </div>
  );
}
