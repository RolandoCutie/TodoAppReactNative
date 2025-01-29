import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

//Esto se usa para definir las propiedades(props) q le vamos a pasar a un componente
type TodoListModalProps = {

    closeModal: () => void; // Función para cerrar el modal
    updateList: (list: any) => void; // Función para cerrar el modal

    list: {
        id: number;        // Propiedades de la lista
        name: string;
        color: string;
        todos: {
            id: string;
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


    //Metodo que se encarga de cambiar el estado del todo de completed a not completed y luego lo que hace es actualizar la lista con el todo cambiado de stado
    toggleTodoCompleted = (index: number) => {
        let list = this.props.list;
        list.todos[index].completed = !list.todos[index].completed;
        this.props.updateList(list);
    }

    deleteTodo=(index:number)=>{
        let list = this.props.list;
        list.todos.splice(index,1);
        this.props.updateList(list);
    }


    //Metodo que se encarga primero de adiccionar un nuevo todo a la lista,le genera un id unico a ese todo q es la fecha en q se adicciono y luego lo a;ade a la lista de ese todo, entonces luego se encarga de actualizar el todo con la nueva lista llamando al metodo q se le pasa desde App.tsx para que el se encarge de mandarlo para firebase
    addElemntToTodoList = () => {
        const { newTodo } = this.state;
        if (!newTodo.trim()) return;

        const list = { ...this.props.list };
        list.todos.push({
            id: Date.now().toString(), // Generate a unique ID
            name: newTodo.trim(),
            completed: false
        });

        this.props.updateList(list);
        this.setState({ newTodo: "" });
        Keyboard.dismiss();
    };

    //This will be the method that will render the list
    renderTodo = (todo: { name: string; completed: boolean }, index: number) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons name={todo.completed ? "checkbox" : "square-outline"} size={24} color={Colors.gray} style={{ marginRight: 12, width: 32 }} />
                </TouchableOpacity>
                <Text style={[styles.todo, { textDecorationLine: todo.completed ? "line-through" : "none", color: todo.completed ? Colors.gray : Colors.black }]}>{todo.name}</Text>
                //here i want to create a button to delete the todo
                

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
                            renderItem={({ item, index }) => this.renderTodo(item, index)}
                            keyExtractor={(item) => item.id} // Use a unique key
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
