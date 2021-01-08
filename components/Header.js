import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/Colors';

const Header = (props) => {
    const { title } = props;

    return(
      <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 36,
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }

});

export default Header;