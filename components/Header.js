import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 36
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }

});

export default Header;