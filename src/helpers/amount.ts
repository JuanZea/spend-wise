export const formatAmount = (amount, symbol = '$') => {

    return symbol + ' ' + amount.toLocaleString('es-CO', {
        style: 'decimal',
        currency: 'COP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
