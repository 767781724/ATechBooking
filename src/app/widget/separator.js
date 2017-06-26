import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Screen, Color } from '../util/index'

export default class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: Screen.width,
        height: Screen.onePixel,
        backgroundColor: Color.border,
    },
});
