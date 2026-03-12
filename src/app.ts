import bucarMunicipios from "./funcoes/buscarMunicipios";
import buscarDados from "./funcoes/dadosIBGE";
import enviarResposta from "./funcoes/enviarResposta";
import filtroRegiao from "./funcoes/filtrarRegiao";
import gerarArquivoResultado from "./funcoes/gerarArquivo";
import lerInput from "./funcoes/lerInput";
import resumo from "./funcoes/resumo";

const app = async () => {
    const dadosIbge = await buscarDados();

    const dadosCsv = await lerInput();

    const filtro = filtroRegiao(dadosIbge);
        
    const buscaCsv = bucarMunicipios(dadosCsv, filtro, 'csv') as any[];
    const buscaResumo = bucarMunicipios(dadosCsv, filtro, 'none') as any[];
    
    gerarArquivoResultado(buscaCsv);
    const gerarResumo = resumo(buscaResumo);    
    
    const resultado = await enviarResposta(gerarResumo);
    
    console.log("Nota:", resultado.score);
    
}

app();