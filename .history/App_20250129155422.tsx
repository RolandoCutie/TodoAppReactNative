import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AddListModal } from './components/AddListModal';
import TodoList from './components/TodoList';
import { Colors } from './constants/colors';
import { fireInstance } from './Data/Remote/Fire';
import { List } from './Domain/listModel';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [lists, setList] = useState<List[]>([]);
    const [loading, setLoading] = useState(true);
    const [appReady, setAppReady] = useState(false);
    const scaleAnim = new Animated.Value(1);

    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                console.log("Initializing Firebase...");
                await fireInstance.init();
                console.log("Firebase initialized, setting up lists listener...");

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

        const prepareApp = async () => {
            await initializeFirebase();
            setTimeout(() => {
                setAppReady(true);
                SplashScreen.hideAsync();
            }, 2000);
        };

        prepareApp();
    }, []);

    useEffect(() => {
        if (appReady) {
            Animated.timing(scaleAnim, {
                toValue: 50,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }
    }, [appReady]);

    if (!appReady) {
        return (
            <View style={styles.splashContainer}>
                <Animated.Image
                    source={require("./assets/icon.png")}
                    style={[styles.splashImage, { transform: [{ scale: scaleAnim }] }]}
                />
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

            <View style={{ height: 275, paddingLeft: 5 }}>
                <FlatList
                    data={lists}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TodoList list={item} updateList={updateList} />}
                    keyboardShouldPersistTaps="always"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    splashContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    splashImage: { width: 100, height: 100 },
    divider: { backgroundColor: Colors.lightBlue, height: 1, flex: 1, alignSelf: 'center' },
    title: { fontSize: 38, fontWeight: '800', color: Colors.black, paddingHorizontal: 64 },
    addList: { borderWidth: 2, borderColor: Colors.lightBlue, borderRadius: 4, padding: 16, alignItems: 'center', justifyContent: 'center' },
    add: { color: Colors.blue, fontWeight: '800', fontSize: 14, marginTop: 8 },
    modalContent: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white },
    closeModalButton: { marginTop: 20, padding: 10, backgroundColor: Colors.blue, borderRadius: 5 },
    closeModalText: { color: '#fff', fontWeight: 'bold' },
});
