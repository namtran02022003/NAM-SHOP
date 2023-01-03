import { useState, useContext, useEffect } from 'react'
import { ShowSsProduct } from '../../App'
import { useNavigate } from 'react-router-dom'
import './Product.css'
export default function Product({ product, showSs }) {
    const dataShow = useContext(ShowSsProduct)
    const Navitage = useNavigate()
    const handlePushId = (idProduct) => {
        var index = dataShow.listId.findIndex(id => {
            return id == idProduct
        })
        if (index == -1) {
            dataShow.setListId(pr => [...pr, idProduct])
        } else {
            var listIdCopy = dataShow.listId.filter(id => id != idProduct)
            dataShow.setListId(listIdCopy)
        }
    }
    localStorage.setItem('listIdSs',JSON.stringify(dataShow.listId))
    useEffect(() => {
     
            // if(document.querySelector(`.active-ss${product.id}`)){
            //     document.querySelector(`.active-ss${product.id}`).innerHTML = "aaa"
            // }
    
        dataShow.listId.map(id => {
            if (document.querySelector(`.active-ss${id}`)) {
                document.querySelector(`.active-ss${id}`).innerHTML = "ccc"
            }
        })
    }, [dataShow.listId])
    // {text ? <span className='remove-ss'>bỏ so sánh</span> : <span className='active-ss'>chọn so sánh</span>}
    // onClick={() => handlePushId(product.id)}
console.log(showSs)
    return (
        <div className="col-3 px-1 my-1 text-center " key={product.id} >
            <div className="bg-white shadow-lg rounded position-relative">
                {showSs && <button className='btn-check-ss'>
                    <span onClick={() => handlePushId(product.id)} className={`active-ss${product.id}`} >add</span>
                </button>}
                <img onClick={() => Navitage(`/detail-product/${product.id}`)} className="img-product" src={product.url_img} width="100%" />
                <div className="text-detail-product ">
                    <p>{product.product_name}</p>
                    <p className="text-thong-so">{product.thongso}</p>
                </div>
                <p className="text-price">{product.price.toLocaleString()} ₫ {product.id}</p>
            </div>
        </div>
    )
}