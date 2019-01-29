const {
    handler
} = require('./index');

test('não deve gerar lote por falta de parâmetros', async () => {
    const body = {
        body: {}
    };
    expect(handler(body)).rejects.toEqual(Error('Falta parâmetros para geração do slote'));
});
test('deve gerar lote', async () => {
    const body = {
        body: {
            dataVencimento: '20032003',
            idTipoCompromisso: '1',
            idFormaCredito: '3',
            documento: '123'
        }
    };
    const result = await handler(body);
    console.log(result);
    expect(result.lote).toMatch(/20032003-1-3-123/);
});