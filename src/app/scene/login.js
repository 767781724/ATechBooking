// @flow
import React, { Component } from 'react'
import { View, Button, StatusBar, StyleSheet, TextInput, Image } from 'react-native';
import { Screen, Request, Toast, Crypto } from '../util/index'

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header : null
    };

    constructor() {
        super();
        StatusBar.setBarStyle('light-content');
    }

    _loginHandler() {
        Request.login(this.state.userid, this.state.userpass)
        .then((data: JSON) => {
            const success = data.success;
            if (success) {
                const { navigate } = this.props.navigation;
                return navigate('Schedule', { 
                    storeid: data.storeid,
                    salerid: data.salerid,
                    salername: data.salername,
                    oper: data.oper,
                    apikey: Crypto.cryptoSHA1(data.info)
                })
            } else {
                Toast(data.info)
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.logo}>
                    <Image style={{width:Screen.designRatio * 150, height:Screen.designRatio * 90}} 
                        source={require('../../img/logo.png')}/>
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="账号"
                            placeholderTextColor="#c4c4c4"
                            onChangeText={(userid) => this.setState({userid})}
                            value={this.state.userid} />
                    </View>
                    <View style={{height: Screen.onePixel, backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView2}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"
                            onChangeText={(userpass) => this.setState({userpass})}
                            value={this.state.userpass} />
                    </View>
                    <View style={{marginTop: Screen.designRatio * 10}}>
                        <Button title="登录" onPress={this._loginHandler.bind(this)}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(22,131,251)'
    },
    logo:{
        alignItems: 'center',
        marginTop: Screen.designRatio * 40,
    },
    edit:{
        height: Screen.designRatio * 40,
        fontSize: Screen.designRatio * 13,
        backgroundColor: '#fff',
        paddingLeft: Screen.designRatio * 15,
        paddingRight: Screen.designRatio * 15
    },
    editView1:{
        height: Screen.designRatio * 48,
        backgroundColor:'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    editView2:{
        height: Screen.designRatio * 48,
        backgroundColor:'white',
        justifyContent: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    editGroup:{
        margin: Screen.designRatio * 20
    },
});