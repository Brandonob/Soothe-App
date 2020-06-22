import React, { useState, useEffect } from 'react'
import weatherpic from '../images/weatherpic.jpg'
import Earlymorning from '../images/Earlymorning.jpeg'
import Rainyday from '../images/Rainyday.jpeg'

const images = [weatherpic, Earlymorning, Rainyday]

const  MyHook = () => {
    const [background, setBackground] = useState("")

    useEffect(() => {
        // let pointer = images[0]
        images.forEach(el => {
            setBackground(el)
            setInterval(() => {
               
            }, 3000)
        })
    }, [])
    return (
        background
    )

}
        export const appStyles = {
            "background-image": `url(${MyHook})`,
            "height": "100vh"
        } 


