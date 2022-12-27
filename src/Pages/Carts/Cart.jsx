import { useState, useContext } from 'react'
import './Cart.css'
import { CartProducts } from '../../App'
import { remove, handleCount, handleChangeCheck } from '../../js'
import { LoginFormCart } from './LoginForm'

export default function Cart() {
    const[showForm,setShowForm] = useState(false)
    const dataCarts = useContext(CartProducts)
    // console.log(dataCarts.Carts)
    const total = () => {
        return dataCarts.Carts.reduce((a, b) => a + b.price * b.count + (b.check && (Number(390000))), 0);
    };
    return (
        <div className='container'>
            <h5>Giỏ hàng</h5>
            {dataCarts.Carts.length > 0 ? <table className='w-100'>
                <tbody>
                    <tr>
                        <th style={{
                            width: "5%"
                        }}>thứ tự
                        </th>
                        <th style={{
                            width: "28%"
                        }}>tên sản phẩm
                        </th>
                        <th style={{
                            width: "7%"
                        }}>số lượng
                        </th>
                        <th style={{
                            width: "10%"
                        }}>đơn giá
                        </th>

                        <th style={{
                            width: "15%"
                        }}>gói bảo hành
                        </th>
                        <th style={{
                            width: "15%"
                        }}>thành tiền
                        </th>
                        <th style={{
                            width: "5%"
                        }}>xóa
                        </th>
                    </tr>
                    {dataCarts.Carts.map((product, index) => (
                        <tr key={product.id}>
                            <th style={{
                                width: "5%"
                            }}>{index + 1}
                            </th>
                            <th style={{
                                width: "28%"
                            }}>{product.product_name} {product.thongso}
                            </th>
                            <th style={{
                                width: "7%"
                            }}><select value={product.count} onChange={(e) => handleCount(product.id, dataCarts, e.target.value)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </th>
                            <th style={{
                                width: "10%"
                            }}>{product.price.toLocaleString()}
                            </th>

                            <th style={{
                                width: "15%"
                            }}>
                                <input onChange={() => handleChangeCheck(product.id, dataCarts)} checked={product.check} type="checkbox" />
                                <p>Gói bảo hành MacOne</p>
                            </th>
                            <th style={{
                                width: "15%"
                            }}>{product.check ? (product.price * product.count + product.count * Number(390000)).toLocaleString() : (product.price * product.count).toLocaleString()}
                            </th>
                            <th onClick={() => remove(product.id, dataCarts)} style={{
                                width: "5%"
                            }}><i className="fa-solid fa-trash-can"></i>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table> : ""}
            <div className='my-3 p-3'>
                <div className='row'>
                    <div className="col-4 f-b fs-5">Tổng thanh toán: <span className="fs-4 color-red f-b">{total().toLocaleString()}</span> ₫</div>
                    <div className="col-6">
                        <button onClick={()=>setShowForm(!showForm)} className='btn-dat'>Đặt hàng</button>
                    </div>
                    <div className="col-2">
                        <button className='btn-delete-carts'>Xóa giỏ hàng</button>
                    </div>
                </div>
            </div>
           {showForm && <LoginFormCart />}
        </div>
    )
}