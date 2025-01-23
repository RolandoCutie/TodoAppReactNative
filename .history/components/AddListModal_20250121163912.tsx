import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';





type AddListModalProps = {
    closeModal: () => void;
};

export const AddListModal: React.FC<AddListModalProps> = ({ closeModal }) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <AntDesign name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
            <View style={{ alignSelf: "stretch" ,marginHorizontal:32 }}>
             <Text>ff</Text>
            </View>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 64,
        left: 172,
    },
    title: {
        position: 'absolute',
        top: 64,
        left: 172,
    },

});
