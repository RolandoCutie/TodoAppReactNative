import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '../constants/colors';



type TodoListModalProp = {
    closeModal: () => void;
};

//Se crea un widget que se le puede pasar una fucion que en este caso es llamada closeModal que se encarga de cerrar el modal
export default class TodoListModal extends React.Component {

    render() {

        return (
            <View style={styles.modalContainer}>
                <Text>Modal</Text>
                <TouchableOpacity onPress={}>
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
