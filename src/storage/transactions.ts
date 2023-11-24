import * as SecureStore from 'expo-secure-store';
import type { Transaction } from './types';

export const KEY = 'Categories';

export const DATA = [];

export const init = async (factoryMode: boolean) => {
    console.log('[Transactions]:', factoryMode ? 'init in factory mode' : 'init');

    DATA.length = 0;
    if (factoryMode) await SecureStore.setItemAsync(KEY, '[]');
    else {
        let result = await SecureStore.getItemAsync(KEY);
        if (result) DATA.push(...JSON.parse(result));
        else await SecureStore.setItemAsync(KEY, '[]');
    }
};

export const add = async (transaction: Transaction) => {
    DATA.push(transaction);
    await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
};

// export const update = async (transaction: Transaction, newTransaction: Transaction) => {
//     const index = DATA.findIndex((item) => item.name === transaction.name && item.icon === transaction.icon);
//     if (index > -1) {
//         DATA[index] = newTransaction;
//         await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
//     }
// };

// export const remove = async (transaction: Transaction) => {
//     const index = DATA.findIndex((item) => item.name === transaction.name && item.icon === transaction.icon);
//     if (index > -1) {
//         DATA.splice(index, 1);
//         await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
//     }
// };
