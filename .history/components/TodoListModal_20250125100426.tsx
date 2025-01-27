import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,KeyboardAvoidingView } from 'react-native';
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
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <AntDesign name="close" size={24} color={Colors.black} />
                </TouchableOpacity>
                <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
                    <Text>{list.name}</Text> {/* Muestra el nombre de la lista */}
                    <Text>Color: {list.color}</Text> {/* Muestra el color de la lista */}
                </View>
            </KeyboardAvoidingView>
        );
    }
}
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
