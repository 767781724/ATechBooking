import { Dimensions, Platform, PixelRatio } from 'react-native'

const designHeightPx = 640;
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

export default {
    width: deviceWidthDp,
    height: deviceHeightDp,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0),
    designRatio: deviceHeightDp / designHeightPx
}