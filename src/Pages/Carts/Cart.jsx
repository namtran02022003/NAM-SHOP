import { useState,useContext} from 'react'
import './Cart.css'
import { CartProducts } from '../../App'
import { remove } from '../../js'
export default function Cart(){
    const dataCarts = useContext(CartProducts)
   const handleCount = (id,data,payload)=>{
    const dataCart = data.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === id);
    const pr = cartCopy[index]
    cartCopy[index] = {
        ...pr,count:payload
    }
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    dataCarts.setCarts(cartCopy);
   }
   const handleChangeCheck = (id,data)=>{
    const dataCart = data.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === id);
    const pr = cartCopy[index]
    if(pr.check){
        pr.check = false
    }else {
        pr.check = true
    }
    cartCopy[index] = {
        ...pr
    }
    console.log(cartCopy)
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    dataCarts.setCarts(cartCopy);
   }
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
                        }}><select value={product.count} onChange={(e)=>handleCount(product.id,dataCarts,e.target.value)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        </th>
                        <th style={{
                            width:"10%"
                        }}>{product.price}
                        </th>
                       
                        <th style={{
                            width:"15%"
                        }}>
                            <input onChange={()=>handleChangeCheck(product.id,dataCarts)} checked={product.check} type="checkbox" />
                            <p>Gói bảo hành MacOne</p>
                        </th>
                        <th style={{
                            width:"15%"
                        }}>{product.check ? product.price * product.count + product.count * Number(390000): product.price * product.count} 
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