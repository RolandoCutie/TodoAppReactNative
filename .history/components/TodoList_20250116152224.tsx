import React from 'react';
import { Text, View } from 'react-native';

//This will be what we call in flutter widget that will be the responsable for display some

export defult TodoList = ({ list }) => {
    return (
        <View>

            <Text>{list.name}</Text>

        </View>
    )
}
