import React, { PureComponent } from 'react'
import { View, Button, StatusBar, StyleSheet, TextInput, Image, AsyncStorage } from 'react-native';
import { Screen, Request, Toast, Crypto } from '../util/index'

export default class Login extends PureComponent {
    static navigationOptions = {
        title: 'Login',
        header : null
    };

    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            userpass: ''
        };
    }

    componentWillMount() {
        const { navigate } = this.props.navigation;
        setTimeout (() => tryAutoLogin(), 100);
    }

    tryAutoLogin() {
        let userid;
        AsyncStorage.getItem("userid", (error,text) => {
            if (text !== null) {
                userid = text;
            }
        })
        let userpass;
        AsyncStorage.getItem("userpass", (error,text) => {
            if (text !== null) {
                userpass = text;
            }
        })
        if (userid !== null && userpass !== null) {
            loginHandler(userid, userpass);
        }
    }

    loginBind() {
        loginHandler(this.state.userid, this.state.userpass)
    }

    writeCache(userid, userpass) {
        AsyncStorage.setItem("userid", userid);
        AsyncStorage.setItem("userpass", userpass);
    }

    loginHandler(userid, userpass) {
        Request.login(userid, userpass)
        .then((data) => {
            const success = data.success;
            if (success) {
                writeCache(userid, userpass)
                const { navigate } = this.props.navigation;
                return navigate('Tab', { 
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
                <StatusBar
                    translucent={true}
                    backgroundColor={'#rgba(0, 0, 0, 0)'}
                    barStyle="light-content"
                    showHideTransition='slide'
                    hidden={false}
                />
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
                        <Button title="登录" onPress={this.loginBind.bind(this)}/>
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