import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';




export default function AddListModal() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TouchableOpacity style={{ position: "absolute", top: 64, left: 72 }}>
                <AntDesign name="close" size={24} color={Colors.black} />

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
