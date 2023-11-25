import { Categories, Transactions } from '@/storage';
import { reload } from './router';
import { loadAsync } from 'expo-font';
import * as SecureStore from 'expo-secure-store';

let ready = false;

export const initialize = async () => {
    if (ready) return;
    ready = true;
    console.log('initialize');

    await mountFonts();
    await mountData();
};

export const restoreToFactoryConfig = async () => {
    console.log('restoreToFactoryConfig');
    await SecureStore.deleteItemAsync('isInFactoryConfig');

    reload();
};

const mountFonts = async () => {
    await loadAsync('Nunito-Light', require('@/assets/fonts/Nunito-Light.ttf'));
    await loadAsync('Nunito-Regular', require('@/assets/fonts/Nunito-Regular.ttf'));
    await loadAsync('Nunito-Bold', require('@/assets/fonts/Nunito-Bold.ttf'));
};

const mountData = async () => {
    const isInFactoryConfig = await getIsInFactoryConfig();
    await Categories.init(isInFactoryConfig);
    await Transactions.init(isInFactoryConfig);
}

const getIsInFactoryConfig = async () => {
    const key = 'isInFactoryConfig';
    const result = await SecureStore.getItemAsync(key);
    if (result) return false;
    await SecureStore.setItemAsync(key, '1');
    return true;
};
