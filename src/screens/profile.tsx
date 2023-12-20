import React from 'react';
import {Image, VStack, Text, ScrollView, Center, useTheme, HStack} from "native-base";
import placeholderprofile from '../assets/placeholderprofile.jpg'
import placeholder from '../assets/fotoplaceholder.png'
import Button from "../components/Button";
import SelectDropdown from "react-native-select-dropdown";
import ChangeGenres from "../components/ChangeGenres";
import ChangePassword from "../components/ChangePassword";
import ChangeProfileInfo from "../components/ChangeProfileInfo";



function Profile() {

    const [select, setselected] = React.useState(0)

    const theme = useTheme()
    return (
        <ScrollView bg={theme.colors['gray']['400']}>
            <VStack bg={{
                    linearGradient: {
                        colors: [theme.colors['gray']['900'], theme.colors['gray']['400']],
                    }
                }}>
                <Image maxH={200} w={"full"} source={placeholder}/>
                <Center>
                    <Image mb={8} borderRadius={"full"} mt={-60} h={120} w={120} source={placeholderprofile}/>

                    <Text color={"white"} fontWeight={"bold"} fontSize={20}>Nome da Pessoa</Text>
                    <Text color={"white"}> FPS | RPG</Text>


                    <Center px={8} my={8} w={'full'} justifyContent={"center"}>

                        <SelectDropdown 
                            data={['Modificar Infos','Modificar Gêneros', 'Modificar Perfil', 'Modificar Senha']}
                            buttonStyle={{
                                backgroundColor: theme.colors["gray"]["400"],
                                borderRadius: 4,
                                width: "50%",
                                marginBottom: 35
                            }}
                            buttonTextStyle={{color: "white"}}
                            dropdownStyle={{
                                marginTop: -50,
                                backgroundColor: 'white',
                                borderRadius: 4
                            }}
                            defaultValueByIndex={0}
                            defaultButtonText={'Modificar informações do perfil'}
                            onSelect={(selectedItem, index) => {
                                setselected(index)
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
                                select == 1 
                                ?<ChangeGenres/> :
                                select == 2 ? 
                                <ChangeProfileInfo/> : 
                                select == 3 ? 
                                <ChangePassword/>
                                : null
                            }
                    </Center>

                    <Button mt={2}> Voltar</Button>
                </Center>
            </VStack>
        </ScrollView>
    );
}

export default Profile;