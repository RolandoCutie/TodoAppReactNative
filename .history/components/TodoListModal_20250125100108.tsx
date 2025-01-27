import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    render() {
        const { closeModal, list } = this.props; // Desestructuración de props

        return (
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <AntDesign name="close" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text>{list.name}</Text>
                <Text>Color: {list.color}</Text>
                <TouchableOpacity onPress={closeModal}>
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </View>
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
        right: 12,
    },
});
