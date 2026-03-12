const resumo = (resultados: any[]) => {
  const acumuladorRegioes: { [key: string]: { soma: number; qtd: number } } = {};
  
  let total_municipios = resultados.length;
  let total_ok = 0;
  let total_nao_encontrado = 0;
  let pop_total_ok = 0;

  resultados.forEach(item => {
    if (item.status === 'OK') {
      total_ok++;
      const pop = parseInt(item.populacao) || 0;
      pop_total_ok += pop;

      const regiao = item.regiao;
      if (!acumuladorRegioes[regiao]) {
        acumuladorRegioes[regiao] = { soma: 0, qtd: 0 };
      }
      acumuladorRegioes[regiao].soma += pop;
      acumuladorRegioes[regiao].qtd++;
      
    } else if (item.status === 'NAO_ENCONTRADO') {
      total_nao_encontrado++;
    }
  });

  const medias_por_regiao: { [key: string]: number } = {};

  Object.keys(acumuladorRegioes).forEach(reg => {
    const media = acumuladorRegioes[reg].soma / acumuladorRegioes[reg].qtd;
    medias_por_regiao[reg] = media; 
  });

  return { 'stats': {
        total_municipios,
        total_ok,
        total_nao_encontrado,
        total_erro_api: 0, 
        pop_total_ok,
        medias_por_regiao
        }
    }
};

export default resumo;