import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ModalContent() {
  return (
    <View style={styles.modalcontent}>
      <Image style={{ width: 150, height: 150, marginBottom: 20 }}
        source={require('../../assets/gas.png')}
      />

      <Text style={styles.textResultado}> Compensa usar alcool</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modalcontent: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center'
  },
  textResultado: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#13d03b'
  }
})