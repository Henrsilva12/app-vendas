export default async function Local(){

    const dadosApi = await fetch('./api/local');
    const todosLocais = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todosLocais.map ( ( cadaLocal ) => (
                        <li key={cadaLocal.key}>
                            {cadaLocal.id}
                            {cadaLocal.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}