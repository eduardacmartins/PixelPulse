import React from 'react';
import {FlatList, HStack, TextArea ,VStack} from "native-base";

import Button from "../components/Button";
import Comment from "../components/Comment";
import HeaderHome from "../components/headerHome";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";


const data = [
    {
        id: 1
    },
    {
        id: 2
    },

    {
        id: 3
    },

    {
        id: 4
    },


    {
        id: 5
    },

]

const AnimatedVStack = Animated.createAnimatedComponent(VStack)


function Home() {
    const [show, setShow] = React.useState(false)

    return (
            <VStack bg={"gray.700"}  flex={1}>
                <FlatList
                    onScroll={({nativeEvent: {contentOffset}})=>{
                        console.log(contentOffset)
                        if(contentOffset.y > 0){
                            setShow(true)
                        }

                        if(contentOffset.y === 0){
                            setShow(false)
                        }
                    }}

                    ListHeaderComponent={<HeaderHome/>}
                    data={data}
                    renderItem={()=>{
                        return <Comment opacity={show}/>
                    }}/>

                {
                    show ? (
                        <AnimatedVStack entering={FadeIn} exiting={FadeOut} p={4}  bg={"gray.700"} w={"full"} my={6}>
                            <TextArea
                                autoCompleteType
                                variant={'unstyled'}
                                placeholder={"Escreva seu comentário"}
                                borderWidth={0}
                                bgColor={"gray.400"}
                                color={'white'}
                                numberOfLines={10}
                                />
                        <HStack justifyContent={'flex-end'} mt={3}>
                        <Button buttonTheme="unstyled" mr={4}>Sem comentários</Button>
                        <Button buttonTheme="whiteTheme">Postar</Button>
                        </HStack>

                        </AnimatedVStack>
                    )
                        : null
                }

            </VStack>
    );
}

export default Home;