import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
    return (<View style={styles.background}>
        <Feather name="search" size={30} style={styles.iconStyle} />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => console.log('submitted')}
        />
    </View>);
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: 'gray',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;