import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoList from './components/TodoList';
import { Colors } from './constants/colors';
import tempData from './tempData';

export default function App() {
    const [modalVisible] = useState(false);

    function setModalVisible(modalVisible: boolean) {
        setModalVisible
    }

    const toggleAddTodoModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContent}>
                    <Text>I am a modal</Text>
                    <TouchableOpacity onPress={toggleAddTodoModal} style={styles.closeModalButton}>
                        <Text style={styles.closeModalText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.divider} />
                <Text style={styles.title}>
                    Todo <Text style={{ fontWeight: '300', color: Colors.blue }}>Lists</Text>
                </Text>
                <View style={styles.divider} />
            </View>

            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity style={styles.addList} onPress={toggleAddTodoModal}>
                    <AntDesign name="plus" size={16} color={Colors.blue} />
                </TouchableOpacity>
                <Text style={styles.add}>Add List</Text>
            </View>

            <View style={{ height: 275, paddingLeft: 32 }}>
                <FlatList
                    data={tempData}
                    keyExtractor={(item) => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TodoList list={item} />}
                />
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
        paddingHorizontal: 64,
    },
    addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        color: Colors.blue,
        fontWeight: '800',
        fontSize: 14,
        marginTop: 8,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeModalButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Colors.blue,
        borderRadius: 5,
    },
    closeModalText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
