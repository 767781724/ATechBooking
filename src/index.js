// @flow
import { AppRegistry, StackNavigator } from 'react-native';

import Login from './app/scene/login'
import Schedule from './app/scene/schedule'
import Detail from './app/scene/detail'
import Password from './app/scene/password'

const ATechBooking = StackNavigator({
    Login: { screen: Login },
    Schedule: { screen: Schedule },
    Detail: { screen: Detail },
    Password: { screen: Password },
});

AppRegistry.registerComponent('ATechBooking', () => ATechBooking);
