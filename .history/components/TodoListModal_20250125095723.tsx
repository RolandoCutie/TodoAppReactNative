import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    render() {
        const { closeModal, list } = this.props; // Desestructuración de props

        return (
            <View style={styles.modalContainer}>
                <Text>{list.name}</Text> {/* Muestra el nombre de la lista */}
                <Text>Color: {list.color}</Text> {}
                <TouchableOpacity onPress={closeModal}> {}
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
