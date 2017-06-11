// @flow
import Toast from 'react-native-root-toast';

const ShowToast = (message: string) => {
    Toast.show(message || '未知错误', {
        duration: 1200,
        position: -70,
        shadow: false,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
}

export default ShowToast;