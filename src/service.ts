export const getExchangeCOP = async (currency: 'USD' | 'EUR', amount: number) => {
    try {
        const response = await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=COP&to=${currency}&q=1`, {
            headers: {
                'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY,
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
            },
        });
        const rate = Number(await response.text());
        return rate * amount;
    } catch (error) {
        console.error(error);
    }
};
