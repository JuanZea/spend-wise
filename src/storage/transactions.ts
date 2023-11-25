import * as SecureStore from 'expo-secure-store';
import type { Category, Transaction } from './types';

const KEY = 'Transactions';

let DATA = {
    data: {},
    lastId: 0,
};

const store = async () => {
    await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
};

export const init = async (factoryMode: boolean) => {
    console.log('[Transactions]:', factoryMode ? 'init in factory mode' : 'init');

    if (factoryMode) await store();
    else {
        let result = await SecureStore.getItemAsync(KEY);
        if (result) DATA = JSON.parse(result);
        else await store();
    }
};

export const arrayData = () => Object.keys(DATA.data).map((key) => DATA.data[key]);
export const data = () => DATA.data;
export const lastId = () => DATA.lastId;

const total = (type: Transaction['type'] | 'balance') => {
    let total = 0;
    const compare = type === 'balance' ? 'income' : type;
    for (const transaction of arrayData()) {
        if (transaction.type === compare) total += transaction.amount;
        else if (type === 'balance') total -= transaction.amount;
    }
    return total;
};

export const balance = () => total('balance');
export const income = () => total('income');
export const egress = () => total('egress');

export const add = async (transaction: Omit<Transaction, 'id'>) => {
    const id = DATA.lastId++;
    DATA.data[id] = { ...transaction, id };
    await store();
};

export const update = async (id: Transaction['id'], newTransaction: Omit<Transaction, 'id'>) => {
    DATA.data[id] = { ...newTransaction, id };
    await store();
};

export const remove = async (id: Transaction['id']) => {
    delete DATA.data[id];
    await store();
};
