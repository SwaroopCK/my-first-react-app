import React, { useRef } from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
    
    const h1Ref = useRef()

    setTimeout(() => {
        console.log(h1Ref.current.innerHTML)    
    }, 10);
    return <h1 ref={h1Ref}>Home <Link to="/about">Go to About</Link></h1> 
}
  