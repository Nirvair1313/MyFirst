import React from 'react'
import { createContentStack,StackItemList } from '@react-navigation/native-stack'
import{stackActions } from '@react-navigation/native' 
function sideBar({ ...props }) {
    return (


        <createContentStack  {...props}>
            <StackItemList {...props} /> 
            <StackItemList>
                <StackItemList label="Stack"/>
            </StackItemList>
        </createContentStack>
    )
}

export default sideBar;