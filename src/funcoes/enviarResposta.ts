import * as dotenv from 'dotenv';
dotenv.config();

async function enviarResposta(dadosCalculados: any) {
  const PROJECT_FUNCTION_URL = process.env.PROJECT_URL;
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  try {
    const resposta = await fetch(PROJECT_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCalculados) 
    });

    if (!resposta.ok) {
      const erroTexto = await resposta.text();
      throw new Error(`Erro no servidor: ${resposta.status} - ${erroTexto}`);
    }

    const resultado = await resposta.json();
    return resultado

  } catch (erro: any) {
    console.error("Error:", erro.message);
  }
}

export default enviarResposta;