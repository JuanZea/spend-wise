import { Pressable, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

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
    onPress: () => void;
    variant?: TButtonStyles['variant'];
};

const Button = ({ children, onPress, variant }: TButtonProps) => {
    return (
        <Pressable className={twMerge(buttonStyles({ variant }))} onPress={onPress}>
            <Text className="text-white font-bold text-lg">{children}</Text>
        </Pressable>
    );
};

export default Button;
