import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState();
  const [alcool, setAlcool] = useState();

  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 150 }} source={require('./assets/logo.png')} />
      <Text style={styles.textTitleApp}>Qual a melhor Opção ?</Text>
      <Text style={styles.textTitle}>Álcool (Preço por litro)</Text>
      <TextInput
        style={styles.textInput}
        value={gasolina}
        onChange={(value) => setGasolina(value)}
      />
      <Text style={styles.textTitle} >Gasolina (Preço por litro)</Text>
      <TextInput
        style={styles.textInput}
        value={alcool}
        onChange={(value) => setAlcool(value)}
      />

      <TouchableOpacity style={styles.calularBtn}>
      <Text style={{ justifyContent: 'center', 
      textAlign: 'center', fontSize: 25, color: '#fff', 
      fontWeight: 'bold', height: 45,
      borderRadius: 50,} }> Calcular </Text>
      </TouchableOpacity>

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
    marginTop: 20,
    height: 40,
    backgroundColor: '#fff',
    width: '80%'
  },
  calularBtn:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red'
  }
});
