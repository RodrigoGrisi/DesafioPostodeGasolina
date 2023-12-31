import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput,
  Image, TouchableOpacity, Modal
} from 'react-native';
import ModalContent from './src/Modal';


export default function App() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [visibleModal, setvisibleModal] = useState(false)
  const [resultado, setResultado] = useState();


  function voltar (){
    return setvisibleModal(false)
  }

  function calcular() {
    // Convertendo os valores para números
    const alcoolValue = parseFloat(alcool);
    const gasolinaValue = parseFloat(gasolina);
  
    if (alcoolValue === 0 || alcoolValue === "") {
      return;
    }

    let resultado = alcoolValue / gasolinaValue

    setResultado(resultado)


    setvisibleModal(true)
  }

  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 150 }} source={require('./assets/logo.png')} />
      <Text style={styles.textTitleApp}>Qual a melhor Opção ?</Text>
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

      <TouchableOpacity style={styles.calularBtn} onPress={calcular}>
        <Text style={{
          justifyContent: 'center',
          textAlign: 'center', fontSize: 25, color: '#fff',
          fontWeight: 'bold', height: 45,
          borderRadius: 50,
        }}> Calcular </Text>
      </TouchableOpacity>



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
    marginTop: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red'
  }
});
