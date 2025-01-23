import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import name from '../.history/components/AddListModal_20250117155054';



export default function AddListModal() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }}>
                <AntDesign name=""></AntDesign>

            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
