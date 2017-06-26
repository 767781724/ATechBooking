import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { AppColors, Screen } from '../util/index';

export default class Welcome extends PureComponent {

    static navigationOptions = {
        title: 'Welcome',
        header : null
    };

    componentWillMount() {
        const { navigate } = this.props.navigation;
        setTimeout (() => navigate('Login'), 1666);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'#rgba(0, 0, 0, 0)'}
                    barStyle="light-content"
                    showHideTransition='slide'
                    hidden={false}
                />
                <Image style={styles.launchImage} source={require('../../img/welcome.png')}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    launchImage: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: Screen.width, 
        height: Screen.height
    }
});
