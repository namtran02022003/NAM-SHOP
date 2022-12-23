import { useState,useContext} from 'react'
import './Cart.css'
import { CartProducts } from '../../App'
import { remove } from '../../js'
export default function Cart(){
    const dataCarts = useContext(CartProducts)
   
    return(
        <div className='container'>
            <h5>Giỏ hàng</h5>
         {dataCarts.Carts.length > 0 ?    <table className='w-100'>
                <tbody>
                <tr>
                        <th style={{
                            width:"5%"
                        }}>thứ tự
                        </th>
                        <th style={{
                            width:"28%"
                        }}>tên sản phẩm
                        </th>
                        <th style={{
                            width:"7%"
                        }}>số lượng 
                        </th>
                        <th style={{
                            width:"10%"
                        }}>đơn giá
                        </th>
                        <th style={{
                            width:"15%"
                        }}>màu sắc
                        </th>
                        <th style={{
                            width:"15%"
                        }}>gói bảo hành
                        </th>
                        <th style={{
                            width:"15%"
                        }}>thành tiền
                        </th>
                        <th style={{
                            width:"5%"
                        }}>xóa
                        </th>
                    </tr>
                    {dataCarts.Carts.map((product,index)=>(
                        <tr key={product.id}>
                        <th style={{
                            width:"5%"
                        }}>{index +1}
                        </th>
                        <th style={{
                            width:"28%"
                        }}>{product.product_name} {product.thongso}
                        </th>
                        <th style={{
                            width:"7%"
                        }}>{product.count}
                        </th>
                        <th style={{
                            width:"10%"
                        }}>{product.price}
                        </th>
                        <th style={{
                            width:"15%"
                        }}>màu sắc
                        </th>
                        <th style={{
                            width:"15%"
                        }}>gói bảo hành
                        </th>
                        <th style={{
                            width:"15%"
                        }}>{product.price * product.count}  
                        </th>
                        <th onClick={()=> remove(product.id,dataCarts)} style={{
                            width:"5%"
                        }}>xóa
                        </th>
                    </tr>
                    ))}
                </tbody>
            </table> :""}
        </div>
    )
}