import Students from '../../data/Students'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {


    const StudensLi = Students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.nome} - {student.nota}
            </li>)
    });

    return (
        <div>
            <h2>
                <strong>
                    <ul style={{ listStyle: 'none' }}>
                        {StudensLi}
                    </ul>
                </strong>
            </h2>
        </div>
    );
}