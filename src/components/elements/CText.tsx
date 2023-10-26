import { Text, StyleSheet } from 'react-native';
import { Theme } from '@/styles';

const CText = ({
    children,
    fontWeight = 'regular',
    textColor = 'dark',
    textSize = 'md',
}) => {
    const textStyles = [
        styles.root,
        styles[`fontWeight_${fontWeight}`],
        styles[`textColor_${textColor}`],
        styles[`textSize_${textSize}`],
    ];

    return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
    root: {
        fontSize: 20,
        color: '#000',
    },
    fontWeight_regular: { fontFamily: 'nunito-Regular' },
    fontWeight_bold: { fontFamily: 'nunito-Bold' },
    fontWeight_thin: { fontFamily: 'nunito-Light' },
    textColor_light: { color: Theme.colors.primary[50] },
    textColor_dark: { color: Theme.colors.primary[950] },
    textSize_sm: { fontSize: 14 },
    textSize_md: { fontSize: 24 },
    textSize_lg: { fontSize: 28 },
});

export default CText;
