import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AddListModal } from './components/AddListModal';
import TodoList from './components/TodoList';
import { Colors } from './constants/colors';
import tempData from './tempData';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [lists, setList] = useState(tempData);


    const toggleAddTodoModal = () => {
        setModalVisible(!modalVisible);
    };

    const renderList = (list: any) => {
        return <TodoList list={list} />
    }

    const addList= (list: any) => {
       setList({[...lists, list]});
    }


    debugger;
    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} animationType="slide" >
                <View style={styles.modalContent}>
                    <AddListModal closeModal={toggleAddTodoModal} addList={addList}/>
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
                    data={lists}
                    keyExtractor={(item) => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderList(item)}
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
        backgroundColor: Colors.white,
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
