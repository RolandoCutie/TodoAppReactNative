import React from 'react';
import { Text, View } from 'react-native';

// Define the type for the list item that will be passed to the TodoList function wich will be
//responsable for obtain the data 
interface List {
    name: string;
}
//This will be what we call in flutter widget that will be the responsable for display some
//data

export default function TodoList({ list }: { list: List }) {
    return (
        <View>
            <Text>{list.name}</Text>
        </View>
    );
}
