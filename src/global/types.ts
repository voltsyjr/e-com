import React from 'react'

type optionButtonProp = {
    // message : string, 
    id : number, 
    // respondTo :? React.Dispatch<React.SetStateAction<any>>, 
    action : (id : number) => any, 
    children ?: React.ReactNode, 
    focus : boolean
}

class buttonParam {
    message : string; 
    constructor(message : string) {
        this.message = message; 
    }
};

interface ProductCard {
    imgSrc : string, 
    desc : {
        name : string, 
        price : number, 
    }, 
    style ?: object
}

export {
    type optionButtonProp, 
    buttonParam, 
    type ProductCard
}
