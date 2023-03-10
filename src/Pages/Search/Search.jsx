import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Product from '../../Components/Products/Product'
export default function SearchDetail() {
    const [data, setData] = useState([])
    const { name } = useParams()
    const abc = async () => {
        if (name.trim().length > 0) {
            const res = await axios.get('../../../json/Products.json')
            var arr= []
            res.data.products.filter(product => {
                const a = product.product_name.toLocaleLowerCase().trim()
                const b = name.trim().toLocaleLowerCase()
                if (a.indexOf(b) === -1) {
                } else {
                    arr.push(product)                  
                }
            })
            setData(arr)
        }
    }
    useEffect(() => {
        abc()
    },[name])

    return (
        <div className='container'>
            <h1 className='text-center'>Kết quả tìm kiếm cho {name}</h1>
        <div className='row m-0'>
            {data.map(product => {
                return (
                    <Product key={product.id} product={product} />
                )
            })}
        </div>
        </div>
    )
} 