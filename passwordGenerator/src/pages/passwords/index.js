import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from "react"
import { useIsFocused } from "@react-navigation/native"

import useStorage from "../../hooks/useStorage";

import PasswordItem from './components/passwordItem';


export function Passwords(){
    const [listPasswords, setListPasswords] = useState([]); //lista de passwords
    const focused = useIsFocused(); //esta tab ta aberta? (default: nao)
    const { getItem, removeItem } = useStorage();

    //chamar o que tiver aqui dentro quando o componente tiver carregado e quando a tab tiver aberta
    useEffect( () => {
        async function loadPasswords(){
            const passwords = await getItem("@pass"); //mostrar lista de passwords
            setListPasswords(passwords);
        }

        loadPasswords();

    }, [focused]);

    //remover password selecionada e atualiza o storage
    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item);

        setListPasswords(passwords);
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.header}>
                <Text style={styles.title}>My Passwords</Text>
            </View>

            <View style={styles.content}>
                <FlatList style={styles.list}
                    data={listPasswords} 
                    keyExtractor={ (item) =>  String(item)} 
                    renderItem={ ({item}) => <PasswordItem 
                                                data={item} 
                                                removePassword={ () => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1
    },

    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
        
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    },

    list: {
        flex: 1,
        paddingTop: 14
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
}); 