import { TouchableRipple } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledTouchableRipple = styled(TouchableRipple);

export default function ({ children, classNames = '', onPress = () => {} }) {
    return (
        <StyledTouchableRipple onPress={onPress} className={classNames}>
            {children}
        </StyledTouchableRipple>
    );
}
