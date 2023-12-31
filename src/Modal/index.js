import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
  import * as Animatable from 'react-native-animatable'


const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function ModalContent(props) {
  return (
    <View style={styles.modalcontent}>

      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', width: '60%'}}>
        <TouchableOpacity style={styles.btnFechar} onPress={props.voltar()}>
          <Text style={{
            justifyContent: 'flex-end',
            textAlign: 'center', fontSize: 18, color: '#fff', height: 25,
            borderRadius: 100,
          }}>X</Text>
        </TouchableOpacity>

      </View>
        <Image style={{ width: 150, height: 150, marginBottom: 20 }}
          source={require('../../assets/gas.png')}
        />

      <Text style={styles.textResultado}>{props.resultado < 0.7 ? "Recomendado Abastercer Álcool " : "Recomendado Abastecer Gasolina"}</Text>
      <View style={{ marginTop: 35 }}>
        <Text style={styles.textInfo}> Com base nos preços:</Text>
        <Text style={styles.textInfo}> Álcool: {props.alcoolValue}</Text>
        <Text style={styles.textInfo}> Gasolina: {props.gasolinaValue}</Text>

      </View>
      <ButtonAnimated 
      animation="pulse"
      iterationCount={Infinity}
      duration={2000}
      style={styles.calcularAgainBtn} onPress={props.voltar()}>
        <Text style={styles.textBtnCalNovamente}> Calcular novamente </Text>
      </ButtonAnimated>

    </View>
  )
}

const styles = StyleSheet.create({
  modalcontent: {
    width:'100%',
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textResultado: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#13d03b'
  },
  textInfo: {
    fontSize: 18,
    marginTop: 8,
    color: '#fff'
  },
  calcularAgainBtn: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFechar: {
    backgroundColor: 'red',
    width: 30,
    borderRadius: 20,
  },
  textBtnCalNovamente:{
    fontSize: 18, 
    color: '#fff', 
    borderRadius: 50,
  }
})