import * as SecureStore from 'expo-secure-store';

export const KEY = 'Categories';
export const DEFUALT = ['compras', 'transporte', 'gasolina', 'mercado', 'comida', 'salud', 'libros', 'datos'];

export const DATA = [];

export const init = async (factoryMode: boolean) => {
    console.log('[Categories]:', factoryMode ? 'init in factory mode' : 'init');
    
    if (factoryMode) {
        DATA.length = 0;
        DATA.push(...DEFUALT);
        await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
    } else {
        let result = await SecureStore.getItemAsync(KEY);
        if (result) DATA.push(...JSON.parse(result));
        else await SecureStore.setItemAsync(KEY, '[]');
    }
};
