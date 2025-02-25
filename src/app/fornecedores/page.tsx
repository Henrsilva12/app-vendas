export default async function Fornecedores(){

    const dadosApi = await fetch('./api/fornecedores');
    const todosFornecedores = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todosFornecedores.map ( ( cadaFornecedor ) => (
                        <li key={cadaFornecedor.key}>
                            {cadaFornecedor.id}
                            {cadaFornecedor.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}