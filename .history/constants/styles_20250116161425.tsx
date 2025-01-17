import { Colors } from "./colors";
interface Styles {
    container?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    divider?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    title?: ReactNative.StyleProp<ReactNative.TextStyle>;
    addList?: ReactNative.StyleProp<ReactNative.ViewStyle>;
    add?: ReactNative.StyleProp<ReactNative.TextStyle>;
  }

export default styles:S = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        backgroundColor: Colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: Colors.black,
        paddingHorizontal: 64
    },
    addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        color: Colors.blue,
        fontWeight: "800",
        fontSize: 14,
        marginTop: 8
    }
};
