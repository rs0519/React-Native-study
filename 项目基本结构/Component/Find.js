/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 周少停 demo1
 * 2016-09-23
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
var Anther = require('../ssss');
var Find = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>发现</Text>
            </View>
        );
    }
});
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
//输出类
module.exports = Find;
