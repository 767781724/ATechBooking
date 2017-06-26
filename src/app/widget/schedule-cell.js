import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading1, Heading2, Paragraph } from './text'
import { Screen, Color } from '../util/index'

export default class ScheduleCell extends PureComponent {
    render() {
        let { info } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                    <View style={styles.top}>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>预定门店：</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>001</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>客户：</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>王先生</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>餐别：</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>午餐</Paragraph>
                    </View>
                    <View style={styles.bottom}>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>日期：</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>2017-05-23</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>到达时间：</Paragraph>
                        <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>17:35</Paragraph>
                    </View>
                    <Separator />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: Screen.onePixel,
        borderColor: Color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    }
});
