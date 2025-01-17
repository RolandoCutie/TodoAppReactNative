import React from 'react';
import { Text, View } from 'react-native';

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
        <View style={[styles.l { backgroundColor: list.color, padding: 32 }]}>
            <Text>{list.name}</Text>
        </View>
    );
}
