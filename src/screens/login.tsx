import { Button, Center, Input, Text, VStack, Image, View} from 'native-base'
import { ImageBackground } from 'react-native';
import fotoplaceholder from '../assets/fotoplaceholder.png'
import { LinearGradient } from 'expo-linear-gradient';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { IAPPRoute, TAPPNavigatorProps } from '../route/RoutesType';

const schema = z.object({
    email: z.string().min(7,{
        message: "Email deve conter mais de 7 caracteres"
    }).email({
        message: "Email invalido!"
    }),
    password: z.string().min(8,{
        message: "Senha deve conter mais de 8 caracteres"
    })

})

interface ISchema extends z.infer<typeof schema>{}

function Login(){
    const{control, handleSubmit, formState: {errors}} = useForm<ISchema>({
        resolver: zodResolver(schema)
    
    })

const navigation = useNavigation<TAPPNavigatorProps>()

function login({email, password} : ISchema){
        console.log(email)
        console.log(password)
        console.log("Logado")

}

    return( 
<VStack bg={'gray.700'} flex={1}>

    <View position={'absolute'} w={'full'} h={'60%'}>
    <ImageBackground
        style={{width:'100%', height:'100%'}}
        source={fotoplaceholder}>

    <LinearGradient
        colors={['rgba(0,0,0,0)', '#121214']} 
        style={{height : '100%', width : '100%'}}/>

    </ImageBackground>

    </View>

    <VStack px={10} pt={64}>
        <Text 
        fontSize={32}
        fontWeight={"bold"}
        textAlign={"center"}
        color={'white'}>Login</Text>

    <Text color={'white'} mb={2} fontSize={16}>Email</Text>

<Controller control={control} name={"email"}
    render={({field: {onChange, onBlur, value}})=> (
        <Input bg={'gray.600'} 
        placeholder='email@gmail.com'
        borderWidth={0}
        mb={4}
        color={'white'}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        _focus={{
            bg:'gray.500'
        }}/>
        )}/>
{           
    errors?.email?.message && <Text mb={8} color={'red.500'}>{errors?.email?.message}</Text>
}
<Text color={'white'} mb={2} fontSize={16}>Senha</Text>

<Controller 
    control={control}
    name={"password"}
    render={({field: {onChange, onBlur, value}})=> (
        <Input bg={'gray.600'} 
        placeholder='*******'
        secureTextEntry={true}
        borderWidth={0}
        mb={4}
        color={'white'}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        _focus={{
            bg:'gray.500'
        }}/>
        )}/>

{                
errors?.password?.message && <Text color={'red.500'}>{errors?.password?.message}</Text>
}
    <Center>
        <Button onPress={handleSubmit(login)}
        bg={"white"}
        mt={8}
        w={"60%"}
        _pressed={{bg:'red.500'}}>               

    <Text color={'gray.700'}>Login</Text>

        </Button>
    </Center>
    </VStack>

<VStack px={10} pb={10} justifyContent={"flex-end"} flex={1}>
    <Center>
        <Text color={'white'} mb={2} fontSize={16}>Não possui uma conta?</Text>
        <Button bg={"gray.500"} 
        w={"60%"}
        _pressed={{bg:'red.500'}}
        onPress={() => navigation.navigate('signup')}>Junte-se!</Button>
        
    </Center>

</VStack>
</VStack>
)
}

export default Login