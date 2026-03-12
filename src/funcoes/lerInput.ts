import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';

export interface IMunicipio {
  municipio: string;
  populacao: string;
}

async function lerInput(): Promise<IMunicipio[]> {
  const listaDeObjetos: IMunicipio[] = [];
  
  const caminhoArquivo = path.resolve('src/dados/input.csv');

  return new Promise((resolve, reject) => {
    fs.createReadStream(caminhoArquivo)
      .pipe(csv.parse({ 
        headers: true, 
        delimiter: ';'
      }))
      .on('data', (row: IMunicipio) => {
        listaDeObjetos.push(row);
      })
      .on('end', () => {
        resolve(listaDeObjetos);
      })
      .on('error', (erro) => {
        reject(erro);
      });
  });
}

export default lerInput;