import { Text, StyleSheet } from 'react-native';

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
    fontWeight_regular: { fontFamily: 'Nunito-Regular' },
    fontWeight_bold: { fontFamily: 'Nunito-Bold' },
    fontWeight_thin: { fontFamily: 'Nunito-Light' },
    textColor_light: { color: '#fff' },
    textColor_dark: { color: '#000' },
    textSize_sm: { fontSize: 14 },
    textSize_md: { fontSize: 24 },
    textSize_lg: { fontSize: 28 },
});

export default CText;
