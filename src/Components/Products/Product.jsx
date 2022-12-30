import { useState,useContext } from 'react'
import { ShowSsProduct } from '../../App'
import { useNavigate } from 'react-router-dom'
import './Product.css'
export default function Product({product}){
    const dataShow = useContext(ShowSsProduct)
    const[text,setText] = useState(false)
    const Navitage = useNavigate()
    const handlePushId = (idProduct)=>{
        var index = dataShow.listId.findIndex(id =>{
            return id == idProduct
        })
        if(index == -1){
            dataShow.setListId(pr => [...pr,idProduct])
        }else{
            var listIdCopy = dataShow.listId.filter(id => id != idProduct)
            dataShow.setListId(listIdCopy)
        }
        setText(!text)
    }
    return(
        <div className="col-3 px-1 my-1 text-center " key={product.id} >
        <div  className="bg-white shadow-lg rounded position-relative">
            {dataShow.showSs && <button className='btn-check-ss' onClick={()=>handlePushId(product.id)}>{text ? <span className='remove-ss'>bỏ so sánh</span> : <span className='active-ss'>chọn so sánh</span>}</button>}
            <img onClick={()=>Navitage(`/detail-product/${product.id}`)} className="img-product" src={product.url_img} width="100%" />
            <div className="text-detail-product ">
                <p>{product.product_name}</p>
                <p className="text-thong-so">{product.thongso}</p>
            </div>
            <p className="text-price">{product.price.toLocaleString()} ₫ {product.id}</p>
        </div>
    </div>
    )
}