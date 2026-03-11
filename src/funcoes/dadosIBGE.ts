const buscarDados = async () => {
    try {
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${url}`);
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error("Houve um problema com a requisição fetch:", erro);
    }
}

export default buscarDados;