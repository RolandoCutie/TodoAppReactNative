
import { AntDesign } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
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
                <TouchableOpacity style={styles.addList} >
                    <AntDesign name="plus" size={16} color={Colors.blue} />
                </TouchableOpacity>
                <Text style={styles.add}>Add List</Text>

            </View>

            <View style={{ height: 275, paddingLeft: 32 }}>
                <FlatList />
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

});
