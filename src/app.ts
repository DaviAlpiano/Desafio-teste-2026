import bucarMunicipios from "./funcoes/buscarMunicipios";
import buscarDados from "./funcoes/dadosIBGE";
import enviarResposta from "./funcoes/enviarResposta";
import gerarArquivoResultado from "./funcoes/gerarArquivo";
import lerInput from "./funcoes/lerInput";
import resumo from "./funcoes/resumo";

const app = async () => {
    const dadosIbge = await buscarDados();

    const dadosCsv = await lerInput();
    
    const buscaCsv = bucarMunicipios(dadosCsv, dadosIbge, 'csv');
    const buscaResumo = bucarMunicipios(dadosCsv, dadosIbge);
    
    const gerarArquivos = gerarArquivoResultado(buscaCsv);
    const gerarResumo = resumo(buscaResumo);
    
    const resultado = await enviarResposta(gerarResumo);
}

app();