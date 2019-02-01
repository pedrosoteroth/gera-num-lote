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

    // dataVencimento{8} idTipoCompromisso{2} idFormaCredito{2} documento{6} random{4} timestamp{13}
    return {
      lote: `${dataVencimento}${idTipoCompromisso}${idFormaCredito}${documento}${Math.floor(1000 + Math.random() * 9000)}${Date.now()}`
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  handler
};