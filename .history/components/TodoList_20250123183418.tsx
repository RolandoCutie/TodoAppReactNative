import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { Colors } from '../constants/colors';


// Define the type for the list item that will be passed to the TodoList function wich will be
//responsable for obtain the data and showed to the user
interface List {
    name: string;
    color: string;
    todos: Todo[];
}

interface Todo {
    name: string;
    completed: boolean;
}
//This will be what we call in flutter widget that will be the responsable for display some
//data

export default class TodoList extends React.Component<{ list: List }> {

    state = {
        showModalVisible: false
    };

    toggleAddTodoModal = () => {
        this.setState({ showModalVisible: !this.state.showModalVisible });
    }

    render() {

        //Obtengo la data de la lista y filtro para determinar la cantidad de todos q estan pendientes y cuales estan terminados

        const list = this.props.list;
        const completedTodos = list.todos.filter((todo) => todo.completed).length;
        const remainigTodos = list.todos.length - completedTodos;



        return (
            <View>
                <Modal
                <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color, }]}>
                    <Text style={styles.title} numberOfLines={2}>{list.name}</Text>

                    <View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.completed}>{remainigTodos}</Text>
                            <Text style={styles.remainign}>Remainign</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.completed}>{completedTodos}</Text>
                            <Text style={styles.remainign}>Completed</Text>
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
        width: 200
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.white,
        marginBottom: 18
    },
    completed: {
        fontSize: 48,
        fontWeight: '200',
        color: Colors.white,

    },
    remainign: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.white,

    },
});
