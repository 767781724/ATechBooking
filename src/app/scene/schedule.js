import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Color, Toast, Screen } from '../util/index'
import NavigationItem from '../widget/navigation-item'
import RefreshListView from '../widget/refresh-listview'
import ScheduleCell from '../widget/schedule-cell'

export default class Schedule extends PureComponent{
    static navigationOptions = ({ navigation }) => ({
        title: `预定列表`,
        headerLeft: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/pass.png')}
                    onPress={() => {
                        const { params } = navigation.state;
                        const { navigate } = navigation;
                        navigate('Config', {
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

    componentWillMount() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        this.props = params
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
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref={(e) => this.listView = e}
                    dataSource={this.state.dataSource}
                    renderHeader={() => this.renderHeader()}
                    renderRow={(rowData) =>
                        <ScheduleCell
                            info={rowData}
                            onPress={() => this.props.navigation.navigate('GroupPurchase', { info: rowData })}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});