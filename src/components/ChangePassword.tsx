import {Input, Text, VStack} from 'native-base'
import React from 'react'
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from '../components/Button';

const schema = z.object({
    oldPassword: z.string({
        required_error: "Digite sua senha antiga, por favor"
    }).min(8, {
        message: "Sua senha antiga deve conter mais de 8 caracteres."
    }),
    newPassword: z.string({
        required_error: "Digite sua nova senha, por favor"
    }).min(8, {
        message: "Sua nova senha deve conter mais de 8 caracteres."
    }),
    newPasswordConfirmation: z.string({
        required_error: "Digite sua nova senha novamente, por favor"
    }).min(8,{
        message:"As senhas devem coincidir"
    })
}).refine(({newPasswordConfirmation, newPassword}) => {
    if(newPassword == newPassword){
        return true
    }
    return false
},{
    message: "Erro ao tentar redefinir senha",
    path: ['newPassword']
})
interface ISchema extends z.infer<typeof schema>{}

function ChangePassword(){

    const {control, handleSubmit, setValue, formState: {errors}} = useForm<ISchema>({
    resolver: zodResolver(schema)
})
    function changePassword({oldPassword, newPassword} : ISchema){
        console.log(oldPassword)
        console.log(newPassword)
        console.log("Senha atualizada.")

}
    
    return (
        <VStack mt={8} w={'full'}>
            <Text color={"white"} mb={2} fontSize={16}> Senha antiga </Text>

            <Controller control={control}
                        name={"oldPassword"}
                        render={({field: {onChange, onBlur, value}})=> (
                            <Input placeholder={"Senha antiga"} secureTextEntry={true}
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
        errors.oldPassword?.message && <Text mb={8} color={"red.500"}>{errors?.oldPassword?.message}</Text>
    }

            <Text color={"white"} mb={2} fontSize={16}> Nova senha </Text>

            <Controller control={control}
                        name={"newPassword"}
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
        errors.newPassword?.message && <Text mb={8} color={"red.500"}>{errors?.newPassword?.message}</Text>
    }  
            <Text color={"white"} mb={2} fontSize={16}> Confirme sua nova senha </Text>

    <Controller control={control}
                name={"newPasswordConfirmation"}
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
        errors.newPasswordConfirmation?.message && <Text mb={8} color={"red.500"}>{errors?.newPasswordConfirmation?.message}</Text>
    }  

    <Button> Alterar senha</Button>
        
    </VStack>

); 
}

export default ChangePassword;