import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.shopLink}>
        <Text style={styles.shopText}>
          ir direto à loja {'>'}
        </Text>
      </Pressable>
      <Text style={styles.welcomeText}>
        Bem-vindo à Cossec!
      </Text>
      <Text style={styles.subtitleText}>
        Sua loja de periféricos.
      </Text>
      <Image source={require('../../assets/Logo01.jpg')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  shopLink: {
    alignSelf: 'flex-end',
    marginTop: 70,
    marginBottom: 10,
  },
  shopText: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 12,   
    color: 'black',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Regular',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000', // Cor preta para o botão
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
