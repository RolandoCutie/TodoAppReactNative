import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';





type AddListModalProps = {
    closeModal: () => void;
};

export const AddListModal: React.FC<AddListModalProps> = ({ closeModal }) => {
    const backgroundColors = ["#24A6D9", "#A7CBD9", "#A7DDD9", ""]

    const [text, setText] = useState<string>('');
    const [colorbackground, setColor] = useState<string>('');
    const [savedText, setSavedText] = useState<string | null>(null); // Estado para guardar el texto

    const handleCreate = () => {
        setSavedText(text); // Guarda el texto
        setText(''); // Limpia el campo de texto
        console.log('Texto guardado:', text); // Puedes manejar el texto guardado como necesites
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
                    value={text}
                />
                <renderColors
                <TouchableOpacity style={[styles.create, { backgroundColor: colorbackground }]} onPress={handleCreate}>
                    <Text style={{ color: Colors.white, fontWeight: "600" }}>Create</Text>
                </TouchableOpacity>
            </>
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
        width: 30,
        height: 30,
        borderRadius: 4,
        marginHorizontal: 8
    }

});
