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
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type TButtonProps = {
    children: string;
    route?: string;
    onPress?: () => void;
    variant?: TButtonStyles['variant'];
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

export default function Button({ children, onPress, route, variant }: TButtonProps) {
    return (
        <Wrapper route={route}>
            <Pressable className={twMerge(buttonStyles({ variant }))} onPress={onPress}>
                <Text className="text-white font-bold text-lg">{children}</Text>
            </Pressable>
        </Wrapper>
    );
}
