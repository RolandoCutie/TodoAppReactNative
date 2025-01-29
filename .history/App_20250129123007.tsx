import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { AddListModal } from './components/AddListModal';
import TodoList, { List } from './components/TodoList';
import { Colors } from './constants/colors';
import Fire, { fireInstance } from './Fire';
import { get } from 'firebase/database';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [lists, setList] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                console.log("Initializing Firebase...");
                await fireInstance.init();
                console.log("Firebase initialized, setting up lists listener...");

                // Load lists from Firebase
                fireInstance.getLists((newLists) => {
                    console.log("Received lists from Firebase:", newLists);
                    setList(newLists);
                    setLoading(false);
                });
            } catch (error) {
                console.error("Failed to initialize Firebase:", error);
                setLoading(false);
            }
        };

        initializeFirebase();
    }, []);


    const toggleAddTodoModal = () => {
        setModalVisible(!modalVisible);
    };

    const renderList = (list: List) => {
        return <TodoList list={list} updateList={updateList} />
    }

    const addList = async (newElement: List) => {
        try {
            console.log("Adding new list:", newElement);
            await fireInstance.addList(newElement);
            // The list will be automatically updated through the Firebase listener
        } catch (error) {
            console.error("Error adding list:", error);
        }
    };

    const updateList = async (updatedList: List) => {
        try {
            console.log("Updating list:", updatedList);
            await fireInstance.updateList(updatedList);
            // The list will be automatically updated through the Firebase listener
        } catch (error) {
            console.error("Error updating list:", error);
        }
    }

    if (loading) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <ActivityIndicator size="large" color={Colors.blue} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} animationType="slide" >
                <View style={styles.modalContent}>
                    <AddListModal closeModal={toggleAddTodoModal} addList={addList} />
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
                    keyExtractor={(item) => item.id.toString()} // Usar el ID único como clave
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderList(item)}
                    keyboardShouldPersistTaps="always"

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
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
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
