import './card.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    const style = {
        backgroundColor: props.color || '#000',
    }
    
    return (
        <div>
            <div className="Card" style={style}>
                <div className='Title'>{props.title}</div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}