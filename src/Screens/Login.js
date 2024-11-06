import React from 'react'
import { Button, Image, Pressable, Text, TextInput, View } from 'react-native'

export default function Login() {
  return (
    <View>
        <Image source={require('../../assets/Logo01.jpg')}/>
        <Text>
            Cadastro
        </Text>
        <Text>
            Email:
        </Text>
        <TextInput placeholder='Digite seu email:'/>
        <Text>
            Senha:
        </Text>
        <TextInput placeholder='Digite sua senha:'/>
        <Pressable>
                <Text>
                    esqueci a senha
                </Text>
            </Pressable>
        <Button title='Entrar'/>
        <Button title='Cadastrar'/>
        <Text>
            By: Lucas Santos
        </Text>
    </View>
  )
}
