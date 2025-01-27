import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';
import TodoListModal from './TodoListModal';

// Define the type for the list item that will be passed to the TodoList function
interface List {
    name: string;
    color: string;
    todos: Todo[];
}

interface Todo {
    name: string;
    completed: boolean;
}

export default class TodoList extends React.Component<{ list: List }> {
    state = {
        showModalVisible: false,
    };

    // Función para alternar la visibilidad del modal
    toggleAddTodoModal = () => {
        this.setState(() => ({
            showModalVisible:
                !this.state.showModalVisible
        }));
    };

    render() {
        const { list } = this.props;
        const completedTodos = list.todos.filter(todo => todo.completed).length;
        const remainingTodos = list.todos.length - completedTodos;

        return (
            <View>
                <Modal
                    animationType='slide'
                    visible={this.state.showModalVisible}
                    onRequestClose={this.toggleAddTodoModal} // Cierra el modal en Android
                >
                    <TodoListModal
    closeModal={this.toggleAddTodoModal}
    list={{ name: "Mi Lista", color: "#FF5733", todos:list. }}
/>
                </Modal>

                <TouchableOpacity
                    style={[styles.listContainer, { backgroundColor: list.color }]}
                    onPress={this.toggleAddTodoModal} // Abre el modal al presionar
                >
                    <Text style={styles.title} numberOfLines={2}>{list.name}</Text>

                    <View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.completed}>{remainingTodos}</Text>
                            <Text style={styles.remaining}>Remaining</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.completed}>{completedTodos}</Text>
                            <Text style={styles.remaining}>Completed</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 34,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.white,
        marginBottom: 18,
    },
    completed: {
        fontSize: 48,
        fontWeight: '200',
        color: Colors.white,
    },
    remaining: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.white,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
