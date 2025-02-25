export default async function clientes(){

    const dadosApi = await fetch('./api/clientes');
    const todosClientes = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todosClientes.map ( ( cadaCliente ) => (
                        <li key={cadaCliente.key}>
                            {cadaCliente.id}
                            {cadaCliente.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}