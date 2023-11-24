import { Pressable, Text, View } from 'react-native';
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Link } from 'expo-router';

type TButtonStyles = VariantProps<typeof buttonStyles>;
const buttonStyles = cva(['px-4 py-2 rounded'], {
    variants: {
        variant: {
            primary: ['bg-primary-500'],
            danger: ['bg-red-500'],
        },
        disabled: {
            true: ['opacity-50'],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type TButtonProps = {
    children: string;
    route?: string | { pathname: string; params: Record<string, string> };
    onPress?: () => void;
    variant?: TButtonStyles['variant'];
    classNames?: string;
    textClass?: string;
    disabled?: boolean;
};

const Wrapper = ({ children, route }) => {
    if (route) {
        return (
            <Link href={route} asChild>
                {children}
            </Link>
        );
    }
    return <>{children}</>;
};

export default function Button({ children, onPress, route, variant, classNames, textClass, disabled }: TButtonProps) {
    return (
        <View className={classNames}>
            <Wrapper route={route}>
                <Pressable
                    android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
                    className={twMerge(buttonStyles({ variant, disabled }))}
                    onPress={onPress}
                    disabled={disabled}
                >
                    <Text className={twMerge('text-white font-bold text-lg', textClass)}>{children}</Text>
                </Pressable>
            </Wrapper>
        </View>
    );
}
