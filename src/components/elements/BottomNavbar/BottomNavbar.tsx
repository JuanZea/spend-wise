import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from '@/hooks';
import IconButton from './IconButton';
import { Theme } from '@/styles';
import { ROUTE_NAMES } from '@/constants';
const BottomNavbar = () => {
    return (
        <View style={styles.container}>

            <IconButton route={ROUTE_NAMES.budget} iconName="md-cash" />
            <IconButton route={ROUTE_NAMES.categories} iconName="md-grid" />
            <IconButton route={''} iconName="md-home" />
            <IconButton route={ROUTE_NAMES.information} iconName="md-information-circle" />
            <IconButton route={ROUTE_NAMES.more} iconName="ellipsis-horizontal" />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.primary[950],
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 10,
    },
    home:{
        elevation: 8,
    }
});

export default BottomNavbar;
