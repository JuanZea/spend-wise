export const formatAmount = (amount) => {
    return amount.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
    });
}