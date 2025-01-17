import React from 'react';
import { StyleSheet, Text } from 'react-native';
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

        <Text style={styles.title} numberOfLines={1}>{list.name}</Text>

    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 342,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.bla,
        marginBottom: 18
    },


});
