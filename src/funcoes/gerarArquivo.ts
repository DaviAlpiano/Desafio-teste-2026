import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

async function gerarArquivoResultado(dados: any[]) {
  const caminhoDestino = path.resolve('src/dados/resultado.csv');
  const ws = fs.createWriteStream(caminhoDestino);

  return new Promise((resolve, reject) => {
    csv.write(dados, { 
      headers: [
        'municipio_input', 
        'populacao_input', 
        'municipio_ibge', 
        'uf', 
        'regiao', 
        'id_ibge', 
        'status'
      ],
      delimiter: ';' // Mantendo o padrão de ponto e vírgula do seu input
    })
    .pipe(ws)
    .on('finish', () => {
      resolve(true);
    })
    .on('error', (erro) => {
      reject(erro);
    });
  });
}

export default gerarArquivoResultado;