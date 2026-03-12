const filtroRegiao = (dadosIbge: any[]) => {
    const regioesExcluidas = ["N", "NE"];

    return dadosIbge.filter(item =>
        !regioesExcluidas.includes(item.microrregiao?.mesorregiao.UF.regiao.sigla)
    );
}

export default filtroRegiao;