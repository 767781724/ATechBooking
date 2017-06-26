import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class Config extends Component{
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Config</Text>
                <Button onPress={() => navigate('Schedule')} title="确定" />
            </View>
        );
    }
}