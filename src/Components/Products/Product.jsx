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
            if (dataShow.listId.length >= 3) {
                alert('chỉ có thể chọn tối đa 3 sản phẩm')
            }else{
                dataShow.setListId(pr => [...pr, idProduct])
            }
        } else {
            var listIdCopy = dataShow.listId.filter(id => id != idProduct)
            dataShow.setListId(listIdCopy)
        }
    }
    localStorage.setItem('listIdSs',JSON.stringify(dataShow.listId))
    useEffect(() => {   
      var e =  document.querySelectorAll('.z')
      if(e.length > 0){        
        let arr = Array.from(e)
        arr.map(item => {item.innerHTML="chọn so sánh", item.style.background="blue"} )
      }
        dataShow.listId.map(id => {
            if (document.querySelector(`.active-ss${id}`)) {
                document.querySelector(`.active-ss${id}`).innerHTML = "bỏ so sánh"
                document.querySelector(`.active-ss${id}`).style.background="red"
            }
        })
    })
    return (
        <div className="col-3 px-1 my-1 text-center " key={product.id} >
            <div className="bg-white shadow-lg rounded position-relative">
                {showSs && <button className='btn-check-ss'>
                    <span onClick={() => handlePushId(product.id)} className={`z active-ss${product.id}`} >chọn so sánh</span>
                </button>}
                <img onClick={() => Navitage(`/detail-product/${product.id}`)} className="img-product" src={product.url_img} width="100%" />
                <div className="text-detail-product ">
                    <p>{product.product_name}</p>
                    <p className="text-thong-so">{product.thongso}</p>
                </div>
                <p className="text-price">{product.price.toLocaleString()} ₫ </p>
            </div>
        </div>
    )
}