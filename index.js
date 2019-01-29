const handler = async (event) => {
  const {
    dataVencimento,
    idTipoCompromisso,
    idFormaCredito,
    documento
  } = event.body;
  try {
    if (!dataVencimento || !idTipoCompromisso || !idFormaCredito || !documento) {
      throw new Error('Falta parâmetros para geração do lote');
    }
    return {
      lote: `${dataVencimento}-${idTipoCompromisso}-${idFormaCredito}-${documento}-${Math.floor(100000 + Math.random() * 900000)}-${new Date().getTime()}`
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  handler
};