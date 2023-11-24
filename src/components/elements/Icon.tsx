import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { twMerge } from 'tailwind-merge';

const StyledIcon = styled(Ionicons);

const Icon = ({ name, size, classNames = '' }) => {
    return <StyledIcon name={name} size={size} className={twMerge(classNames)} />;
};

export default Icon;
