import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import tempData from '../tempData';



type TodoListModalProp = {
    closeModal: () => void;
};

//Se crea un widget que se le puede pasar una fucion que en este caso es llamada closeModal que se encarga de cerrar el modal
export default class TodoListModal extends React.Component {

    render() {

        return {}

    }




//Metodo que es llamado cuando se hace el onPress del boton

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
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: Colors.black,
        alignSelf: "center",
        marginBottom: 16
    },
    imput: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightBlue,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,

        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"


    },
    colorSelect: {
        width: 50,
        height: 40,
        borderRadius: 4,
        marginHorizontal: 8,
        marginTop: 10,
        paddingBottom: 24,
    }

});
