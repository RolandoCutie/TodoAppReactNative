import React from 'react';
import { Text, View } from 'react-native';

let TodoList: [] = [];
//This will be what we call in flutter widget that will be the responsable for display some

export default TodoList = ({ list }) => {
    return (
        <View>

            <Text>{list.name}</Text>

        </View>
    )
}
