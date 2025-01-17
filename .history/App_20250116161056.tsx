
import { AntDesign } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoList from './components/TodoList';
import { Colors } from './constants/colors';
import tempData from './tempData';


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
                <FlatList data={tempData} keyExtractor={item => item.name} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item }) => TodoList({ list: item })} />
            </View>
        </View>
    );
}


