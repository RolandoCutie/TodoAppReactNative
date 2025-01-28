import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

//Esto se usa para definir las propiedades(props) q le vamos a pasar a un componente
type TodoListModalProps = {

    closeModal: () => void; // Función para cerrar el modal
    updateList: (list: any) => void; // Función para cerrar el modal

    list: {                // Propiedades de la lista
        name: string;
        color: string;
        todos: {
            name: string;
            completed: boolean;
        }[]
    };
};
//Este es el modal que se lavanta cuando le damos a un list y mostramos los todos
//aqui tenemos la funcion update list q es la q primerp cambiams el estado del todo de esa list y luego actualizamos
// Se crea un componente que recibe props
export default class TodoListModal extends React.Component<TodoListModalProps> {

    state = {
        newTodo: ""
    }



    toggleTodoCompleted = (index: number) => {
        let list = this.props.list;
        list.todos[index].completed = !list.todos[index].completed;
        this.props.updateList(list);
    }


    addElemntToTodoList = () => {
        const { newTodo } = this.state;
        if (!newTodo.trim()) {
            return; // Evita agregar todos vacíos
        }

        const list = { ...this.props.list };
        list.todos.push({ name: newTodo.trim(), completed: false });
        this.props.updateList(list);

        // Limpia el campo de texto
        this.setState({ newTodo: "" });

=
    };

    //This will be the method that will render the list
    renderTodo = (todo: { name: string; completed: boolean }, index: number) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons name={todo.completed ? "checkbox" : "square-outline"} size={24} color={Colors.gray} style={{ marginRight: 12, width: 32 }} />
                </TouchableOpacity>
                <Text style={[styles.todo, { textDecorationLine: todo.completed ? "line-through" : "none", color: todo.completed ? Colors.gray : Colors.black }]}>{todo.name}</Text>

            </View>

        );
    }

    //Notas
    //Flat list es como un scrollView donde se ponen los elemntos a desplazar
    render() {
        const { closeModal, list } = this.props; // Desestructuración de props
        const { newTodo } = this.state; // Desestructuración del estado

        const taskCount = list.todos.length;
        const completedTodos = list.todos.filter(todo => todo.completed).length;
        const remainingTodos = list.todos.length - completedTodos;

        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
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
                            renderItem={({ item }: { item: { name: string; completed: boolean } }) => (
                                this.renderTodo(item, list.todos.indexOf(item))
                            )}
                            keyExtractor={(item: { name: string }) => item.name}
                            contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                    <View style={[styles.section, styles.footer]} >


                    <TextInput
                            style={[styles.input, { borderColor: list.color }]}
                            placeholder="Enter task"
                            onChangeText={(text) => this.setState({ newTodo: text })}
                            value={newTodo}
                        />

                        <TouchableOpacity style={[styles.add, { backgroundColor: list.color }]} onPress={this.addElemntToTodoList}>
                            <AntDesign name="plus" size={16} color={Colors.white} />
                        </TouchableOpacity>

                    </View>
                </SafeAreaView >
            </KeyboardAvoidingView>
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
        marginBottom: 6
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
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"

    }, input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        paddingHorizontal: 8,
        marginRight: 8

    }, add: {
        width: 48,   // Define un tamaño fijo
        height: 48,  // Define un tamaño fijo
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    todoContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16
    },
    todo: {
        color: Colors.black,
        fontWeight: "700",
        fontSize: 16
    }


});
