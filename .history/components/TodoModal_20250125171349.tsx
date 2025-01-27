import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

//Esto se usa para definir las propiedades(props) q le vamos a pasar a un componente
type TodoListModalProps = {
    closeModal: () => void; // Función para cerrar el modal
    list: {                // Propiedades de la lista
        name: string;
        color: string;
        todos: {
            name: string;
            completed: boolean;
        }[]
    };
};

// Se crea un componente que recibe props
export default class TodoListModal extends React.Component<TodoListModalProps> {

    renderTodo = (todo: { name: string; completed: boolean }) => {
        return (
            <Text>{todo.name}</Text>
        );
    }
    render() {
        const { closeModal, list } = this.props; // Desestructuración de props



        const taskCount = list.todos.length;
        const completedTodos = list.todos.filter(todo => todo.completed).length;
        const remainingTodos = list.todos.length - completedTodos;

        return (
            <SafeAreaView style={styles.container} >
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <AntDesign name="close" size={24} color={Colors.black} />
                </TouchableOpacity>
                <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                    <Text style={styles.title}>{list.name}</Text>
                    <Text style={styles.taskCount}>{completedTodos} of {taskCount} task</Text>

                </View>

                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        data={list.todos}
                        renderItem={({ item }) => (
                            <renderTodo todo={item}></renderTodo>

                        )}
                        keyExtractor={item => item.name}

                    />

                </View>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 64,
        right: 52,
        zIndex: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: Colors.black,
        alignSelf: "flex-start",
        marginBottom: 16
    },
    section: {
        flex: 1,
        alignSelf: "stretch",
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: Colors.gray,
        fontWeight: "600"

    },
});
