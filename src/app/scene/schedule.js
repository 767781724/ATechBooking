// @flow
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Color, Toast, Screen } from '../util/index'
import NavigationItem from '../widget/navigation-item'

export default class Schedule extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `预定列表`,
        headerLeft: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/pass.png')}
                    onPress={() => {
                        const { params } = navigation.state;
                        const { navigate } = navigation;
                        navigate('Password', {
                            oper: params.oper,
                        });
                    }}
                />
            </View>
        ),
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/add.png')}
                    onPress={() => {
                        const { params } = navigation.state;
                        const { navigate } = navigation;
                        navigate('Detail', { 
                            uid: '',
                            storeid: params.storeid,
                            salerid: params.salerid,
                            salername: params.salername,
                            oper: params.oper,
                            apikey: params.apikey
                        });
                    }}
                />
            </View>
        ),
        headerStyle: { backgroundColor: Color.theme },
        headerTitleStyle: { color: 'white' }  
    });

    constructor() {
        super();

    }

    _updateHandler() {
        // //Toast(this.state.userid + ' ' + this.state.userpass)
        // Request.login(this.state.userid, this.state.userpass)
        // .then(data => {
        //     const success = data.success;
        //     if (success) {
        //         const { navigate } = this.props.navigation;
        //         return navigate('Schedule', { 
        //             storeid: data.storeid,
        //             salerid: data.salerid,
        //             salername: data.salername,
        //             oper: data.oper,
        //             apikey: Crypto.cryptoSHA1(data.info)
        //         })
        //     } else {
        //         Toast(data.info)
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    }

    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Schedule with {params.salername}</Text>
                <Button onPress={() => navigate('Detail', { uid: '' })} title="新增" />
                <Button onPress={() => navigate('Detail', { uid: '123456' })} title="修改" />
                <Button onPress={() => navigate('Password')} title="改密码" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});