import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Heading2, Paragraph } from './text'
import Separator from './separator'

export default class SimpleCell extends PureComponent {
    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />
        
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Heading2>{this.props.title}</Heading2>
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        <Paragraph style={{ color: '#999999' }}>{this.props.subtitle}</Paragraph>
                        <Image style={styles.arrow} source={require('../../img/cell_arrow.png')} />
                    </View>

                    <Separator />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});
