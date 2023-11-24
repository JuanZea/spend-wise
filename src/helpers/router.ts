import { router } from 'expo-router';

export const forceReplace = (route: string) => {
    while (router.canGoBack()) router.back();
    router.replace(route);
};
