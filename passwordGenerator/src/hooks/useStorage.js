import AsynscStorage from "@react-native-async-storage/async-storage";


const useStorage = () => {
    //mostrar as passwords guardadas
    const getItem = async(key) => {
        try {
            const passwords = await AsynscStorage.getItem(key); //obter passwords

            return JSON.parse(passwords) || []; //retorna passwords em JSON ou retorna JSON vazia (caso não haja passwords)

        } catch(err){
            console.log("error when showing: ", err);
            return [];
        }
    };

    //guardar um password no storage
    const saveItem = async(key, value) => {
        try {
            let passwords = await getItem(key); //obter todas as passwords

            passwords.push(value); //acrescentar a nova password ás existentes

            await AsynscStorage.setItem(key, JSON.stringify(passwords)); //guardar na use storage

        } catch(err){
            console.log("error when saving: ", err);
        }
    };

    //remover um password no storage
    const removeItem = async() => {

    };

    return {
        getItem, saveItem, removeItem
    };
};

export default useStorage;