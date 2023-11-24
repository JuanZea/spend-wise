import * as SecureStore from 'expo-secure-store';

export const KEY = 'Categories';

export const DEFUALT = [
    { name: 'Compras', icon: 'basket-sharp' },
    { name: 'Transporte', icon: 'bus-sharp' },
    { name: 'Gasolina', icon: 'car-sharp' },
    { name: 'Mercado', icon: 'cart-sharp' },
    { name: 'Comida', icon: 'fast-food-sharp' },
    { name: 'Salud', icon: 'fitness' },
    { name: 'Libros', icon: 'library-sharp' },
    { name: 'Datos', icon: 'phone-portrait-sharp' },
];

export const DATA = [];

export const init = async (factoryMode: boolean) => {
    console.log('[Categories]:', factoryMode ? 'init in factory mode' : 'init');
    
    DATA.length = 0;
    if (factoryMode) {
        DATA.push(...DEFUALT);
        await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
    } else {
        let result = await SecureStore.getItemAsync(KEY);
        if (result) DATA.push(...JSON.parse(result));
        else await SecureStore.setItemAsync(KEY, '[]');
    }
};

export const addCategory = async (category: { name: string, icon: string }) => {
    DATA.push(category);
    await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
}
