import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './constants/colors';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.divider} />
                <Text style={styles.title}>Todo <Text style={{ fontWeight: "300", color: Colors.blue }}>Lists
      </Text>

                </Text>
                <View style={styles.divider} />
            </View>
            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity>
                    <AntDesign name="plus" size={16} color={Colors.blue} />
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
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
    }
});
