import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

// Define the type for the list item that will be passed to the TodoList function wich will be
//responsable for obtain the data and showed to the user
interface List {
    name: string;
    color: string;
}
//This will be what we call in flutter widget that will be the responsable for display some
//data

export default function TodoList({ list }: { list: List }) {
    return (
        <View style={[styles.listContainer, { backgroundColor: list.color, }]}>
            <Text style={styles.title}>{list.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 342,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems:''
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: Colors.black,
        paddingHorizontal: 64
    },


});
