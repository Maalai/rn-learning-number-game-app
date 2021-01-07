import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Input = (props) => {
    const { style } = props;
    return (
    <TextInput {...props} style={{...styles.input, ...style}} />
    );
};

const styles = StyleSheet.create({
    input: {
        width: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Input;