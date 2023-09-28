import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import * as Clipboard from 'expo-clipboard'

import useStorage from '../../hooks/useStorage';


export function ModalPassword({ password, handleClose }){
    const { saveItem } = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password); //esperar que copie a password
        
        await saveItem("@pass", password); //guardar password

        alert("Password copied successfully!"); //alerta

        handleClose(); //fechar modal
    }


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Generated Password</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={handleClose}>
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleCopyPassword}>
                        <Text style={styles.btnSaveText}>Save password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24
    },

    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },

    text: {
        color: "#fff",
        textAlign: 'center'
    },

    btnArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: 'center',
        justifyContent: "space-between"
    },

    btn: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },

    btnSave: {
        backgroundColor: "#392de9",
        borderRadius: 8
    },

    btnText: {

    },

    btnSaveText: {
        color: "#fff",
        fontWeight: 'bold'
    }
})