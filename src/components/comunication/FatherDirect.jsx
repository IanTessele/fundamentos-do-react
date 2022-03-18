import ChildrenDirect from './childrenDirect'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <ChildrenDirect
                text='children 1'
                numero={20}
                bool={true}>


            </ChildrenDirect>
        </div>
    );
}