export default async function Venda(){

    const dadosApi = await fetch('./api/venda');
    const todasVendas = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todasVendas.map ( ( cadaVenda ) => (
                        <li key={cadaVenda.key}>
                            {cadaVenda.id}
                            {cadaVenda.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}