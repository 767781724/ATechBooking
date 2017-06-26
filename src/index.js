import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Welcome from './app/scene/welcome'
import Login from './app/scene/login'
import Schedule from './app/scene/schedule'
import Detail from './app/scene/detail'
import Config from './app/scene/config'
import TabBarItem from './app/widget/tabbar-item'

const Tab = TabNavigator(
    {
        Schedule: {
            screen: Schedule,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '预定',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('../../img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                )
            }),
        },
        Customer: {
            screen: Schedule,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '客户',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('../../img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
                    />
                )
            }),
        },

        Store: {
            screen: Schedule,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '门店',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('../../img/tabbar/pfb_tabbar_order_selected@2x.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: Schedule,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('../../img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const ATechBooking = StackNavigator({
    {
        Welcome: { screen: Welcome },
        Login: { screen: Login },
        Tab: { screen: Tab },
        Detail: { screen: Detail },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
});

// const ATechBooking = StackNavigator({
//     Welcome: { screen: Welcome },
//     Login: { screen: Login },
//     Schedule: { screen: Schedule },
//     Detail: { screen: Detail },
//     Config: { screen: Config },
// });

AppRegistry.registerComponent('ATechBooking', () => ATechBooking);
