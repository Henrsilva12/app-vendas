export default async function Classificacai(){

    const dadosApi = await fetch('./api/classificacao');
    const todoasClassificacoes = await dadosApi.json();

    return(
        <>
            <ul>
                { //Aqui vai apresentar os dados
                    todoasClassificacoes.map ( ( cadaClassificacao ) => (
                        <li key={cadaClassificacao.key}>
                            {cadaClassificacao.id}
                            {cadaClassificacao.name}
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}