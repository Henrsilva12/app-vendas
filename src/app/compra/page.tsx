export default async function Compra(){

    const dadosApi = await fetch('./api/compra');
    const todasCompras = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todasCompras.map ( ( cadaCompra ) => (
                        <li key={cadaCompra.key}>
                            {cadaCompra.id}
                            {cadaCompra.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}