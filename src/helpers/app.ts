import { Categories } from '@/storage';
import * as SecureStore from 'expo-secure-store';
import * as Updates from 'expo-updates';

export const initialize = async () => {
    console.log('initialize');
    const isInFactoryConfig = await getIsInFactoryConfig();
    await Categories.init(isInFactoryConfig);
    console.log('DBCategories', Categories.DATA);
};

export const restoreToFactoryConfig = async () => {
    console.log('restoreToFactoryConfig');
    await SecureStore.deleteItemAsync('isInFactoryConfig');

    Updates.reloadAsync();
};

const getIsInFactoryConfig = async () => {
    const key = 'isInFactoryConfig';
    const result = await SecureStore.getItemAsync(key);
    if (result) return false;
    await SecureStore.setItemAsync(key, '1');
    return true;
};
