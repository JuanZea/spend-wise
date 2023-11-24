import * as SecureStore from 'expo-secure-store';
import { defaultCategories as DEFAULT } from '@/constants';
import type { Category } from './types';

const KEY = 'Categories';
const DEFAULT_LENGTH = Object.keys(DEFAULT).length;

let DATA = {
    data: {},
    lastId: DEFAULT_LENGTH,
};

const store = async () => {
    await SecureStore.setItemAsync(KEY, JSON.stringify(DATA));
};

export const init = async (factoryMode: boolean) => {
    console.log('[Categories]:', factoryMode ? 'init in factory mode' : 'init');

    if (factoryMode) {
        DATA.data = DEFAULT;
        DATA.lastId = DEFAULT_LENGTH;
        await store();
    } else {
        let result = await SecureStore.getItemAsync(KEY);
        if (result) DATA = JSON.parse(result);
        else await store();
    }
};

export const arrayData = () => Object.keys(DATA.data).map((key) => DATA.data[key]);
export const data = () => DATA.data;
export const lastId = () => DATA.lastId;

export const add = async (category: Omit<Category, 'id'>) => {
    const id = DATA.lastId++;
    DATA.data[id] = { ...category, id };
    await store();
};

export const update = async (id: Category['id'], newCategory: Omit<Category, 'id'>) => {
    DATA.data[id] = { ...newCategory, id };
    await store();
};

export const remove = async (id: Category['id']) => {
    delete DATA.data[id];
    await store();
};
