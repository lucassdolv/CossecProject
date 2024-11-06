import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

export default function Cadastro() {
  return (
    <View>
        <Image source={require('../../assets/Logo01.jpg')}/>
        <Text>
            Cadastro
        </Text>
        <Text>
            Nome:
        </Text>
        <TextInput placeholder='Digite seu nome:'/>
        <Text>
            Email:
        </Text>
        <TextInput placeholder='Digite seu email:'/>
        <Text>
            Senha:
        </Text>
        <TextInput placeholder='Digite sua senha:'/>
        <Text>
            Endereço:
        </Text>
        <TextInput placeholder='Digite seu endereço:'/>
        <Text>
            Complemento:
        </Text>
        <TextInput placeholder='Digite o complemento:'/>

        <Button title='Cadastrar'/>
        <Button title='Entrar'/>
    </View>
  )
}
