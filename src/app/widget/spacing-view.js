import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class SpacingView extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: '#f3f3f3',
    },
});
