import React, {FunctionComponent} from 'react'

type FontProp = {
    children : JSX.Element
}

const h1 = ({children} : FontProp) => {
    return (
        <p className='h1' ></p>
    )
}

export {
    h1
}
