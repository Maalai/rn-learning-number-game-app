import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const NumberDialog = (props) => {
    return(
        <View style={styles.dialogContainer}>
            <Text style={styles.dialogText}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    dialogContainer: {
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogText: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        color: Colors.primary
    }
});

export default NumberDialog;