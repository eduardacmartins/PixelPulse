import {Input, Text, VStack, useTheme} from 'native-base'
import React from 'react'
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from '../components/Button';
import SelectDropdown from 'react-native-select-dropdown';
import { GENRES } from '../@types/ApiTypes';

const schema = z.object({
    
    favoriteGen1: z.enum(GENRES, {
        required_error: "Não foi possível reconhecer o gênero, tente novamente."
    }), 
    favoriteGen2: z.enum(GENRES, {
        required_error: "Não foi possível reconhecer o gênero, tente novamente."
    }),

    gamesLife: z.string({
        required_error: "Qual jogo mais te marcou?"
    }).min(4)
})

interface ISchema extends z.infer<typeof schema>{}

function ChangeGenres(){

    const theme= useTheme()

    const {control, handleSubmit, setValue, formState: {errors}} = useForm<ISchema>({
    resolver: zodResolver(schema)
})
    function changeGenres({favoriteGen1, favoriteGen2} : ISchema){
        console.log(favoriteGen1)
        console.log(favoriteGen2)
        console.log("Gêneros atualizados.")

}
    
    return (
        <VStack>
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
                            setValue('favoriteGen1', selectedItem,{
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
                            setValue('favoriteGen2', selectedItem,{
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
                        errors.favoriteGen1?.message && <Text mb={8} color={"red.500"}>{errors?.favoriteGen1?.message}</Text>
                    }

                    {
                        errors.favoriteGen2?.message && <Text mb={8} color={"red.500"}>{errors?.favoriteGen2?.message}</Text>
                    }

                    <Text color={"white"} mt={4} mb={2} fontSize={16}> Jogo da Vida </Text>
                    <Controller control={control}
                                name={"gamesLife"}
                                render={({field: {onChange, onBlur, value}})=> (
                                    <Input placeholder={"Digite aqui seu jogo favorito"}
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

    <Button mt={8}>Modificar informações</Button>
        
    </VStack>

); 
}

export default ChangeGenres;