import React from "react";
import { KeyboardAvoidingView } from "react-native";


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
    divider: {
        backgroundColor: Colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: Colors.black,
        paddingHorizontal: 64,
    },
    addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        color: Colors.blue,
        fontWeight: '800',
        fontSize: 14,
        marginTop: 8,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    closeModalButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: Colors.blue,
        borderRadius: 5,
    },
    closeModalText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
