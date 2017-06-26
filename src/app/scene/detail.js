import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native';

export default class Detail extends PureComponent{
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Detail</Text>
                <Button onPress={() => navigate('Schedule', { uid: '123456' })} title="确定" />
            </View>
        );
    }
}