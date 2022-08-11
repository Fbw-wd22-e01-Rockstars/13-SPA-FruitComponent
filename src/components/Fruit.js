import React,{useState} from 'react'

export default function Fruit(props) {

    let colorsArray=["red","green","yellow","black","purple"]
    let randomColor= colorsArray[Math.floor(Math.random()*colorsArray.length)]
    
    const [color,setColor]=useState(randomColor)

    const changeColor=()=>{
        setColor(colorsArray[Math.floor(Math.random()*colorsArray.length)])
        
    }
    const deleteFruit=(name)=>{
        props.setFruits( props.fruits.filter(fruit=>fruit!==name) )
    }
  return (
    <div>
        <h1>{props.fruitName} , Color = {color} <button onClick={changeColor}>Change Color</button> <button onClick={()=>deleteFruit(props.fruitName)}>Delete Me</button></h1>
    </div>
  )
}
