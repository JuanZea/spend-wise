import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';
import { Theme } from '@/styles';

type TSelectProps = {
    data: string[];
    onSelect?: (item: string, index: number) => void;
    placeholder?: string;
    width?: string | number;
    defaultValue?: number;
};

export default function Select({
    data,
    onSelect = () => {},
    width = '100%',
    placeholder = 'Selecciona una opción',
    defaultValue,
}: TSelectProps) {
    return (
        <SelectDropdown
            data={data}
            defaultValueByIndex={defaultValue}
            // defaultValue={'England'}
            onSelect={onSelect}
            defaultButtonText={placeholder}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
                return item;
            }}
            // @ts-ignore
            buttonStyle={{ ...styles.dropdown1BtnStyle, width: width }}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
                return (
                    <Icon
                        source={isOpened ? 'chevron-up' : 'chevron-down'}
                        color={Theme.colors.primary[500]}
                        size={25}
                    />
                );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    );
}

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: Theme.colors.primary[50],
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgb(124, 117, 126)',
    },
    dropdown1BtnTxtStyle: { color: '#000', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
});
