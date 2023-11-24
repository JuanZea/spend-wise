import * as Updates from 'expo-updates';
import { router } from 'expo-router';

export const forceReplace = (route: string) => {
    while (router.canGoBack()) router.back();
    router.replace(route);
};

export const reload = () => {
    Updates.reloadAsync();
};
