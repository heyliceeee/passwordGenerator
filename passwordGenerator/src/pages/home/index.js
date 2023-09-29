import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'

import { ModalPassword } from '../../../src/components/modal';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


export function Home(){
  const [size, setSize] = useState(10); //tamanho de caracteres
  const [passwordValue, setPasswordvalue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //gerar password
  function generatePassword(){
    let password = "";

    for(let i=0, n=charset.length; i < size; i++){
      //buscar uma letra random baseado no tamanho de caracteres (slider)
      password += charset.charAt(Math.floor(Math.random() * n)); //concatenar e colocar um caracter random de 0 até charset.length
    }

    setPasswordvalue(password); //password gerada
    setModalVisible(true); //abrir modal
  }


  return(
    <View style={styles.container}>
      <Image source={require("../../../src/assets/logo.png")} style={styles.logo}/>

      <Text style={styles.title}>{size} characters</Text>

      {/* slider */}
      <View style={styles.area}>
        <Slider style={styles.slider} minimumValue={6} maximumValue={20} minimumTrackTintColor="#FF2626" maximumTrackTintColor="#BBBBBB" thumbTintColor="#008577" value={size}
        onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btnText}>Generate password</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} 
          handleClose={ () => setModalVisible(false) }
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, //preencher tudo
    backgroundColor: "#F3F3FF",
    justifyContent: "center", //centralizar tudo vertical
    alignItems: "center" //centralizar tudo horizontal
  },

  logo: {
    marginBottom: 60
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFFF",
    borderRadius: 8,
    padding: 8
  },

  slider: {
    height: 50
  },

  btn: {
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },

  btnText: {
    color: '#FFF',
    fontSize: 20
  }
});