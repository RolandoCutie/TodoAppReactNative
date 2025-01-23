import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoList from './components/TodoList';
import { Colors } from './constants/colors';
import tempData from './tempData';


export default function AddListModal() {
    return (
        <KeyboardAvoidingView>

        </KeyboardAvoidingView>

    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
