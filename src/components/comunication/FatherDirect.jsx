import ChildrenDirect from './childrenDirect'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <ChildrenDirect name='vidor' age={20} nerd={true} />
            <ChildrenDirect name='duda' age={10} nerd={false} />
            <ChildrenDirect name='alan' age={8} nerd={true} />
            <ChildrenDirect name='maria' age={22} nerd={false} />
        </div>
    );
}