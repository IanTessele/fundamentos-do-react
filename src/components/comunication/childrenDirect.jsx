// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    return(
        <div>
            <span> {props.name} </span> 
            <span><strong> {props.age} </strong></span>
            <span> {props.nerd ? 'true':'false'}! </span>
        </div>
    );
}