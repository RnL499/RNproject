import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SimpleFlexDemo = () => {
    return (
    // 1. 外部容器：佔滿全螢幕
    <View style={styles.container}>
        <View style={styles.flexWrapper}>
            <View style={[styles.box, { backgroundColor: 'red' }, {flex: 2}]} />
            <View style={[styles.box, { backgroundColor: 'green' }, {flex:1}]} />
            <View style={[styles.box, { backgroundColor: 'blue' }, {flex: 12}]} />
            <Text style={{
                color: 'white', 
                backgroundColor: 'gray'
                }}>pencil head</Text>
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    flexWrapper: {
        flex: 1, 
        flexDirection: 'column', // 選項: 'row', 'column', 'row-reverse', 'column-reverse'
        backgroundColor: '#171717',
        // padding: 5,
    },
    box: {
        width: 60,
        height: 80,
        margin: 5,
    },
});

export default SimpleFlexDemo;