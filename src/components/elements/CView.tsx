import { View, StyleSheet } from 'react-native';

const CView = ({ children, padding = 0 }) => {
    const viewStyles = [styles.root];

    return <View style={viewStyles}>{children}</View>;
};

export default CView;

const styles = StyleSheet.create({ root: {}});
