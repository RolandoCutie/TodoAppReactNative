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

    }



    //Forma para declarar las variables que se usan en la vista y guardar los valores en los metodos onPress
    const [text, setText] = useState<string>('');
    const [colorbackground, setColor] = useState<string>('#24A6D9');
    const [savedText, setSavedText] = useState<string | null>(null); // Estado para guardar el texto


    //Metodo que es llamado cuando se hace el onPress del boton
    const CreateTodo = () => {
        setColor(colorbackground);
        setSavedText(text); // Guarda el texto
        setText(''); // Limpia el campo de texto
        console.log('Texto guardado:', text); // Puedes manejar el texto guardado como necesites
        console.log('Color guardado:', colorbackground); // Puedes manejar el texto guardado como necesites

        tempData.push({
            name: text,
            color: colorbackground,
            todos: []
        })

        setText('');
        setColor('');
        closeModal();
    };

    const renderColors = () => {
        return backgroundColors.map((color, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => setColor(color)}
                />
            );
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <AntDesign name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
            <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
                <Text style={styles.title}>Create Todo List</Text>

                <TextInput
                    style={styles.imput}
                    placeholder="List Name?"
                    onChangeText={setText}
                    value={text} />
                <View style={[styles.colorSelect, { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }]}>{renderColors()}</View>
                <TouchableOpacity style={[styles.create, { backgroundColor: colorbackground }]} onPress={CreateTodo}>
                    <Text style={{ color: Colors.white, fontWeight: "600" }}>Create</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};


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
