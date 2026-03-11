import normalizar from "./normalizar";

const bucarMunicipios = (dadosCsv:any[], dadosIbge:any[], context:string) => {
        return dadosCsv.map(itemCsv => {
        let nomeLimpoCsv = normalizar(itemCsv.municipio);      

        const correspondenteIbge = dadosIbge.find(itemIbge => {
            const nomeLimpoIbge = normalizar(itemIbge.nome);
            const matchNome = nomeLimpoIbge === nomeLimpoCsv;

            if (matchNome && nomeLimpoIbge === "santo andre") {
                const popCsv = parseInt(itemCsv.populacao);
                return popCsv > 100000; 
            }
            
            return nomeLimpoIbge === nomeLimpoCsv;
        });

        if (context === 'csv') {
            return {
            municipio_input: itemCsv.municipio,
            populacao_input: itemCsv.populacao,
            municipio_ibge: correspondenteIbge ? correspondenteIbge.nome : 'NAO_ENCONTRADO',
            uf: correspondenteIbge ? correspondenteIbge.microrregiao.mesorregiao.UF.regiao.sigla : 'NAO_ENCONTRADO',
            regiao: correspondenteIbge ? correspondenteIbge.microrregiao.mesorregiao.UF.regiao.nome : 'NAO_ENCONTRADO',
            id_ibge: correspondenteIbge ? correspondenteIbge.id : 'NAO_ENCONTRADO',
            status: correspondenteIbge ? 'OK' : 'NAO_ENCONTRADO'
        };
        }
        return {
            municipio_original: itemCsv.municipio,
            populacao: itemCsv.populacao,
            nome_oficial: correspondenteIbge ? correspondenteIbge.nome : 'NAO_ENCONTRADO',
            uf: correspondenteIbge ? correspondenteIbge.microrregiao.mesorregiao.UF.regiao.sigla : 'NAO_ENCONTRADO',
            regiao: correspondenteIbge ? correspondenteIbge.microrregiao.mesorregiao.UF.regiao.nome : 'NAO_ENCONTRADO',
            id_ibge: correspondenteIbge ? correspondenteIbge.id : 'NAO_ENCONTRADO',
            status: correspondenteIbge ? 'OK' : 'NAO_ENCONTRADO'
        }; 
    })
}

export default bucarMunicipios;