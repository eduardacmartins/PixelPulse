import React from 'react';
import {Image, VStack, Text, HStack, Icon, Button, useTheme} from "native-base";
import {ThumbsDown, ThumbsUp} from "phosphor-react-native";
import placeholder from '../assets/fotoplaceholder.png'
import Animated, {FadeIn, FadeOut, useAnimatedStyle, useSharedValue} from "react-native-reanimated";


const AnimatedHStack = Animated.createAnimatedComponent(HStack)

function Comment({opacity}: {opacity: boolean}) {
    const opacityValue = useSharedValue(.4)
    const [menageLike, setLiked] = React.useState({
        liked: false,
        disliked: false
    })

    const animatedStyle: {} = useAnimatedStyle(
        (): {} =>{
            return{
                opacity: .4
            }
        })
    const theme = useTheme()

    return (
        <AnimatedHStack style={animatedStyle} px={4} my={4}>
            <Image mr={2} w={60} mt={3} h={60} rounded={"full"} alt={"imagem de perfil"} source={placeholder}/>

            <VStack flex={1}>
                <Text fontSize={18} fontWeight={"bold"} color={"white"}>Eduarda</Text>
                <Text  color={"white"}  numberOfLines={5} textBreakStrategy={"balanced"}>
                    Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.. </Text>

                <HStack mt={4}>
                    <Text flex={1} color={"white"} opacity={.6}>FPS | Action Games</Text>

                    <Button p={0} onPress={()=> setLiked((prevState)=>{
                        if(prevState.liked){
                            return {
                                liked: false,
                                disliked: !prevState.disliked
                            }
                        }

                        return {
                            ...prevState,
                            disliked: !prevState.disliked
                        }
                    })} variant={"unstyled"}>

                        <ThumbsDown mirrored={true}
                                    color={menageLike.disliked ? theme.colors["red"]["500"] : "white"}
                                    size={32}
                                    weight={menageLike.disliked ? "fill" : "thin"} />

                    </Button>

                    <Button p={0} variant={"unstyled"} onPress={()=> setLiked((prevState)=>{

                        if(prevState.disliked){
                            return {
                                liked: !prevState.liked,
                                disliked: false
                            }
                        }

                        return {
                            ...prevState,
                            liked: !prevState.liked
                        }
                    })}>

                        <ThumbsUp  color={menageLike.liked ? theme.colors["red"]["500"] : "white"}
                                size={32}
                                weight={menageLike.liked ? "fill" : "thin"} />

                    </Button>
                </HStack>
            </VStack>
        </AnimatedHStack>
    );
}

export default Comment;