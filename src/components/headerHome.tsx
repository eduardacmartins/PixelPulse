import React from 'react';
import {Center, Divider, HStack, Icon, Text, useTheme, View, VStack} from "native-base";
import {ImageBackground} from "react-native";
import placeholder from "../assets/fotoplaceholder.png";
import {LinearGradient} from "expo-linear-gradient";
import {CaretDown, Star} from "phosphor-react-native";
import Button from "./Button";

function HeaderHome() {
    const theme = useTheme()
    const [descriptionToggle, setDescriptionToggle] = React.useState(false)

    return (
        <VStack bg={"gray.700"} flex={1}>
            <View position={"absolute"} w={"full"} h={"60%"}>
                <ImageBackground
                    style={{width : '100%', height: '100%'}}
                    source={placeholder}>

                    <LinearGradient
                        colors={['rgba(0,0,0,0)', theme.colors['gray']['700']]}
                        style={{height : '100%', width : '100%'}}/>

                </ImageBackground>
            </View>

            <VStack px={8} pt={"56"}>
                <Text fontSize={32}
                    color={"white"}
                    fontWeight={"bold"}
                    marginLeft={-3}
                > Valorant </Text>

                <Text fontSize={16}
                    color={"white"}
                    marginLeft={-1}
                > PC | 20/06/2020 | Riot Games</Text>

                <Divider my={4} h={1} bg={"red.500"} w={"30%"}/>

                <Text fontSize={16}
                    color={"white"}
                        marginLeft={-1}
                        numberOfLines={descriptionToggle ? 99 : 3}
                        onPress={()=>{
                            setDescriptionToggle(!descriptionToggle)
                    }}
                > Valorant is a team-based tactical shooter and first-person shooter set in the near-future. Players assume the control of agents, characters who come from a plethora of countries and cultures around the world. In the main game mode, players join either the...</Text>

                <HStack justifyContent={"center"} my={6}>
                    <Star size={48} color={theme.colors["yellow"][600]} weight={"fill"}  />
                    <Star size={48} color={theme.colors["yellow"][600]} weight={"fill"} />
                    <Star size={48} color={theme.colors["yellow"][600]} weight={"fill"} />
                    <Star size={48} color={theme.colors["yellow"][600]} weight={"light"}/>
                    <Star size={48} color={theme.colors["yellow"][600]} weight={"light"}/>
                </HStack>

                <Button buttonTheme={"whiteTheme"}> Não joguei</Button>

                <Center my={4}>
                    <Icon as={CaretDown} name="CaretDown"  color="white"  />
                    <Icon opacity={.6} mt={-3} as={CaretDown} name="CaretDown"  color="white"  />
                    <Icon opacity={.3} mt={-3} as={CaretDown} name="CaretDown"  color="white"  />
                </Center>
            </VStack>
        </VStack>
    );
}

export default HeaderHome;