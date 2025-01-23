import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';





type AddListModalProps = {
    closeModal: () => void;
};

export const AddListModal: React.FC<AddListModalProps> = ({ closeModal }) => {
    backgroundColors=[""]

    const [text, setText] = useState<string>('');
    const [savedText, setSavedText] = useState<string | null>(null); // Estado para guardar el texto

    const handleCreate = () => {
        setSavedText(text); // Guarda el texto
        setText(''); // Limpia el campo de texto
        console.log('Texto guardado:', text); // Puedes manejar el texto guardado como necesites
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
                    value={text}
                />

                return (
                <TouchableOpacity style={[styles.create, { backgroundColor: Colors.blue }]} onPress={handleCreate}>
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

});
