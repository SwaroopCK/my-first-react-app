import React from 'react'
import { useParams } from 'react-router-dom'

export default function Greet(){
    const params = useParams()
    return <h1>Hello { params.name }</h1>
}