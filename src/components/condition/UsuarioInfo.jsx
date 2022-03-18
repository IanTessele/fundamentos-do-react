import If from './if';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const User = props.User || {}
    return (
        <div>
            <If test={User && User.name}>
                Seja bem-vindo <strong>{User.name}</strong>!
            </If>
            <If test={!User || !User.name}>
                Seja bem-vindo <strong>Amigão</strong>!
            </If>
        </div>
    );
} 