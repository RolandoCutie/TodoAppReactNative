import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';



export default function AddListModal() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>

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
