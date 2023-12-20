import {Button, Center, Input, Text, VStack, Image, Box, View, ScrollView, useTheme} from 'native-base'
import {ImageBackground} from 'react-native';
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'

import placeholder from '../assets/fotoplaceholder.png'
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import { IAuthRoute } from '../route/RoutesType';
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const genres = ['FPS', 'RPG'] as const


const schema = z.object({
    email: z.string({
        required_error: "Não foi possível reconhecer o email, preencha novamente."
    }).min(5, {
        message: "Email deve conter mais de 5 caracteres."
    }).email({
        message: "Email inválido!"
    }),
    password: z.string({
        required_error: "Digite sua senha"
    }).min(8, {
        message: "Senha deve conter mais de 8 caracteres."
    }),
    confirmPassword: z.string({
        required_error: "Confirme sua senha"
    }).min(8, {
        message: "Senha deve conter mais de 8 caracteres."
    }),
    favoriteGenre1: z.enum(genres, {
        required_error: "Não foi possível reconhecer o gênero, tente novamente."
    }), 
    favoriteGenre2: z.enum(genres, {
        required_error: "Não foi possível reconhecer o gênero, tente novamente."
    }),

    gamesLife: z.string({
        required_error: "Qual jogo mais te marcou?"
    }).min(4)
}).refine(({password, confirmPassword}) => {
    if(password == confirmPassword){
        return true
    }
    return false
}, {
    message: "Senhas não coincidentes",
    path: ['password']
}).refine(({favoriteGenre1, favoriteGenre2}) => {
    if(favoriteGenre1 == favoriteGenre2){
        return false
    }
    return true
}, {
    message: "Opa! Gêneros iguais",
    path: ['favoriteGen1']
})

interface ISchema extends z.infer<typeof schema>{}

function Signup(){
    const navigation = useNavigation()
    const {control, handleSubmit, setValue, formState: {errors}} = useForm<ISchema>({
        resolver: zodResolver(schema)
    })
    const theme = useTheme()


async function signup(data : ISchema){
    const response =  await fetch('http://10.0.2.2:8080/users/signup', {
            method : "POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dataParsed = JSON.stringify(response)
    }
    return (

    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <VStack bg={"gray.700"} flex={1}>

            <View position={"absolute"} w={"full"} h={"60%"}>
                <ImageBackground
                    style={{width : '100%', height: '100%'}}
                    source={placeholder}>

                    <LinearGradient
                        colors={['rgba(0,0,0,0)', '#121214']}
                        style={{height : '100%', width : '100%'}}/>

                    </ImageBackground>
                </View>

                <VStack px={10} pt={"20"}>
                    <Text fontSize={32} color={"white"}
                        fontWeight={"bold"}
                        textAlign={"center"}> Junte-se à </Text>

                    <Text fontSize={32} mt={2} mb={4} color={"white"}
                        fontWeight={"bold"}
                        textAlign={"center"}> nossa comunidade! </Text>

                    <Text color={"white"} mb={2} fontSize={16}> Email </Text>


                    <Controller control={control}
                                name={"email"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input placeholder={"email@gmail.com"}
                                        mb={2}
                                        bg={"gray.400"}
                                        color={"white"}
                                        borderWidth={0}
                                        _focus={{
                                            bgColor: "gray.600"
                                        }}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )} />

                    {
                        errors.email?.message && <Text mb={8} color={"red.500"}>{errors?.email?.message}</Text>
                    }

                    <Text color={"white"} mb={2} fontSize={16}> Senha </Text>

                    <Controller control={control}
                                name={"password"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input placeholder={"*******"} secureTextEntry={true}
                                        bg={"gray.400"}
                                        mb={2}
                                        color={"white"}
                                        borderWidth={0}
                                        _focus={{
                                            bgColor: "gray.600"
                                        }}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )} />

                    {
                        errors.password?.message && <Text mb={8} color={"red.500"}>{errors?.password?.message}</Text>
                    }

                    <Text color={"white"} mb={2} fontSize={16}> Confirme a senha </Text>

                    <Controller control={control}
                                name={"confirmPassword"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input placeholder={"*******"} secureTextEntry={true}
                                        bg={"gray.400"}
                                        color={"white"}
                                        mb={2}
                                        borderWidth={0}
                                        _focus={{
                                            bgColor: "gray.600"
                                        }}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )} />

                    {
                        errors.confirmPassword?.message && <Text mb={8} color={"red.500"}>{errors?.confirmPassword?.message}</Text>
                    }

                    <Text color={"white"} mb={5} fontSize={16}> Gêneros Favoritos </Text>

                    <SelectDropdown
                        data={['RPG', 'FPS']}
                        buttonStyle={{
                            backgroundColor: theme.colors["gray"]["400"],
                            borderRadius: 4,
                            width: "100%",
                            marginBottom: 10
                        }}
                        buttonTextStyle={{color: "white"}}
                        dropdownStyle={{
                            marginTop: -50,
                            backgroundColor: 'white',
                            borderRadius: 4
                        }}
                        defaultButtonText={'Selecione o gênero.'}
                        onSelect={(selectedItem, index) => {
                            setValue('favoriteGenre1', selectedItem,{
                                shouldValidate: true,
                                shouldDirty: true})
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />

                    <SelectDropdown
                        data={['RPG', 'FPS']}
                        buttonStyle={{
                            backgroundColor: theme.colors["gray"]["400"],
                            borderRadius: 4,
                            width: "100%",
                            marginBottom: 12
                        }}
                        buttonTextStyle={{color: "white"}}
                        dropdownStyle={{
                            marginTop: -50,
                            backgroundColor: 'white',
                            borderRadius: 4
                        }}
                        defaultButtonText={'Selecione o gênero.'}
                        onSelect={(selectedItem, index) => {
                            setValue('favoriteGenre2', selectedItem,{
                                shouldValidate: true,
                                shouldDirty: true})
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />

                    {
                        errors.favoriteGenre1?.message && <Text mb={8} color={"red.500"}>{errors?.favoriteGenre1?.message}</Text>
                    }

                    {
                        errors.favoriteGenre2?.message && <Text mb={8} color={"red.500"}>{errors?.favoriteGenre2?.message}</Text>
                    }

                    <Text color={"white"} mt={4} mb={2} fontSize={16}> Jogo da Vida </Text>
                    <Controller control={control}
                                name={"gamesLife"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input placeholder={"*******"}
                                        mb={2}
                                        bg={"gray.400"}
                                        color={"white"}
                                        borderWidth={0}
                                            _focus={{
                                            bgColor: "gray.600"
                                        }}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )} />

                    {
                        errors.gamesLife?.message && <Text mb={8} color={"red.500"}>{errors?.gamesLife?.message}</Text>
                    }

                    <Center>
                        <Button _pressed={{
                                    bg: "red.500"
                                }} bg={"white"}
                                mt={6}
                                w={"60%"}
                                onPress={handleSubmit(signup)}
                        >

                            <Text color={"gray.700"}>Registrar</Text>
                        </Button>
                    </Center>
                </VStack>

                <Center px={10} pb={10} mt={8} justifyContent={"flex-end"}  flex={1}>
                    <Text color={"white"} mb={4} fontSize={16}> Já possui conta? </Text>
                    <Button
                        _pressed={{
                            bg: "red.500"
                        }}
                        onPress={()=> {
                            navigation.goBack()
                        }}
                        bg={"gray.500"} w={"60%"}><Text color={"white"}>Entrar!</Text></Button>
                </Center>
            </VStack>
        </ScrollView>
    )
}

export default Signup


