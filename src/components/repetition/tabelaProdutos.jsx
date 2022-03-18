import listaProdutos from '../../data/produtos'
import './tabelaProdutos.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const Produtos = listaProdutos.map(
        (produdo) => {
            return (
                <tr key={produdo.id}>
                    {/* <td className='ID'>{produdo.id}</td> */}
                    <td className='ProdutoValor'>{produdo.produto}</td>
                    <td className='PrecoValor'>R$ {produdo.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            );
        }
    );

    return (
        <table className='Tabela'>

            <thead>
                <tr>
                    {/* <th className='ID'>Id</th> */}
                    <th className='Produto'>Produto</th>
                    <th className='Preco'>Preço</th>
                </tr>
            </thead>

            <tbody>
                {Produtos}
            </tbody>

        </table>
    );
}