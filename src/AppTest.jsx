import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './AppTest.css'
import f from '../json/Products.json'
export default function AppTest() {
   const [satae,setSate] = useState([])
   var arrId = [1,71,76]
   var newArr = []
const getDatas = async()=>{
    setSate([])
    const res = await axios.get('../json/Products.json')
    res.data.products.forEach(product =>{
        for(let i=0;i<arrId.length;i++){
            if(product.id == arrId[i]){
                console.log(product)
              setSate(pr => [...pr,product])
            }else{
            }
        }
    })
}
useEffect(()=>{
    getDatas()
},[])
var a = []
console.log(satae)


return(
    <div>nam</div>
)
}
