

import { useNavigate } from 'react-router-dom'
export default function Product({product}){
    const Navitage = useNavigate()
  
   
    return(
        <div className="col-3 px-1 my-1 text-center " key={product.id} >
        <div  className="bg-white shadow-lg rounded">
            <img onClick={()=>Navitage(`/detail-product/${product.id}`)} className="img-product" src={product.url_img} width="100%" />
            <div className="text-detail-product ">
                <p>{product.product_name}</p>
                <p className="text-thong-so">{product.thongso}</p>
                <p className="text-price">{product.price.toLocaleString()} ₫ </p>
            </div>
        </div>
    </div>
    )
}