import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  return(
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo}/>

      <Text style={styles.title}>20 characters</Text>

      {/* slider */}
      <View style={styles.area}>
        <Slider style={styles.slider} minimumValue={6} maximumValue={20} minimumTrackTintColor="#FF2626" maximumTrackTintColor="#BBBBBB" thumbTintColor="#008577"/>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Generate password</Text>
      </TouchableOpacity>
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