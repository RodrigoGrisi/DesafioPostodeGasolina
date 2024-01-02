import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Image,
  TouchableOpacity, Modal, Animated
} from 'react-native';
import ModalContent from './src/Modal';
import * as Animatable from 'react-native-animatable'


export default function App() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [visibleModal, setvisibleModal] = useState(false);
  const [resultado, setResultado] = useState();

  const WidhAnimate = useRef(new Animated.Value(0)).current;
  const heightAnimate = useRef(new Animated.Value(10)).current;
  const textOpaciti = useRef(new Animated.Value(0)).current

  const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

  useEffect(() => {

    Animated.sequence([

      Animated.timing(WidhAnimate, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(heightAnimate, {
        toValue: 150,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(textOpaciti, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      })

    ]).start(() => {
      console.log("Seja bem vindo ao nosso App." + "\n" + "\n" +
        "Veja qual melhor combustivel para sua viagem")
    });

  }, [])

  let porcentLargura = WidhAnimate.interpolate({
    inputRange: [0, 100], // Entrada
    outputRange: ['0%', '100%'] // vai sair de 0% até 100%
  });


  function voltar() {
    setGasolina(0)
    setAlcool(0)
    return setvisibleModal(false)
  }

  function calcular() {
    // Convertendo os valores para números
    const alcoolValue = parseFloat(alcool);
    const gasolinaValue = parseFloat(gasolina);

    if (alcoolValue === "" || alcoolValue === 0) {
      alert("Digite um valor valido para a Alcool")
      return;
    } else if (gasolinaValue === "" || gasolinaValue === 0) {
      alert("Digite um valor valido para a Gasolina")
      return;
    }


    let resultado = alcoolValue / gasolinaValue

    setResultado(resultado)
    setvisibleModal(true)
  }

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          width: porcentLargura,
          height: heightAnimate,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
      >
        <Image style={{ width: 150, height: 150 }} source={require('./assets/logo.png')} />
      </Animated.View>

      <Animated.View style={{ opacity: textOpaciti }}>
        <Text style={[styles.textTitleApp, { backgroundColor: '#121212' }]}>Qual a melhor Opção ?</Text>
      </Animated.View>

      <Text style={styles.textTitle}>Álcool (Preço por litro)</Text>
      <TextInput
        placeholder='Ex: 3,64'
        keyboardType='numeric'
        style={styles.textInput}
        value={alcool}
        onChangeText={(value) => setAlcool(value)}
      />
      <Text style={styles.textTitle} >Gasolina (Preço por litro)</Text>
      <TextInput
        placeholder='Ex: 5,61'
        keyboardType='numeric'
        style={styles.textInput}
        value={gasolina}
        onChangeText={(value) => setGasolina(value)}
      />

      <ButtonAnimated style={styles.calularBtn} 
      animation="fadeInUp"
      onPress={calcular} 
      >
        <Animatable.Text
          duration={3000}
          iterationCount={Infinity}
          animation="pulse"
          style={styles.TextBtnCalcular}> Calcular </Animatable.Text>
      </ButtonAnimated>

      <Modal transparent={true} animationType='slide' visible={visibleModal}>
        <ModalContent alcoolValue={alcool}
          gasolinaValue={gasolina} resultado={resultado}
          voltar={() => voltar}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleApp: {
    fontSize: 25,
    color: '#fff',
    marginTop: 20,
    marginBottom: 50,
  },
  textTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff'
  },
  textInput: {
    padding: 10,
    marginTop: 20,
    height: 40,
    backgroundColor: '#fff',
    width: '80%'
  },
  calularBtn: {
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red',
    height: 45,
    justifyContent: 'center'
  },
  TextBtnCalcular: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  }
});