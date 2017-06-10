import * as React from 'react';
import { AppRegistry } from 'react-native';

import RootScene from './app/root';

export default class ATechBooking extends React.PureComponent<object, object> {
    render() {
        return (
            <RootScene />
        );
    }
}

AppRegistry.registerComponent('ATechBooking', () => ATechBooking);
