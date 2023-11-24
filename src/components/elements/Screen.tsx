import { View } from 'react-native';
import Constants from 'expo-constants';
import { twMerge } from 'tailwind-merge';

export default function Screen({ children, naked = false, classNames = '' }) {
    return <View className={twMerge('h-full p-5', classNames)} style={naked && { paddingTop: Constants.statusBarHeight + 20 }}>{children}</View>;
}
