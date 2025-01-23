import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';



export default function AddListModal() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }}
            \</TouchableOpacity>

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
