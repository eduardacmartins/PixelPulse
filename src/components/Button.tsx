import React from 'react';
import {Button as NativeBaseButton, IButtonProps, Text} from "native-base";

interface IMyButton extends IButtonProps{
    children: string
    buttonTheme?: "default" | "unstyled" | "whiteTheme" | "redTheme"
}

const styles = {
    default: {
        bg: "gray.500", 
        pressed: "red.500",
        textColor: "white"
    }, 
    unstyled:{
        bg: "transparent", 
        pressed: "gray.500",
        textColor: "white" 
    },
    whiteTheme :{
        bg: "white",
        pressed: "red.500",
        textColor: "gray.500"
    },
    redTheme :{
        bg: "red.500",
        pressed: "white",
        textColor: "gray.500"
    }
}

function Button({children, buttonTheme = "default", ...props} : IMyButton ) {
    return (
        <NativeBaseButton {...props}  _pressed={{
                                bgColor: styles[buttonTheme].pressed
                            }}
                            bg={styles[buttonTheme].bg}

        >
            <Text color={styles[buttonTheme].textColor}>{children}</Text>
        </NativeBaseButton>
    );
}

export default Button;