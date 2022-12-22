

import { changePrice, handlePrice } from "../../js"
import axios from "axios"
import { useState, useEffect, useRef } from 'react'
import '../ProductsPage/ItemProduct.css'
import Product from "../../Components/Products/Product"
export default function IphonePage() {
    const [value, setValue] = useState('')
    const [datas, setDatas] = useState([])
    const [listProduct, setListProduct] = useState([])
    const [listProductac, setListProductac] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/Products.json')
        const datas = res.data.category.filter(item => item.category_id === 3)
        const result = datas[0].subList.filter(item => item.id_children1 === 1)
        const products = res.data.products.filter(product => product.category_id === 3).filter(item => item.id_children1 === 1)
        setListProduct(products)
        setListProductac(products)
        setDatas(result)
    }
    useEffect(() => {
        getData()
    }, [])

    const ButtonOptions = [
        {
            name: "tất cả",
            value: 0
        },
        {
            name: "dưới 10 triệu",
            value: 1
        },
        {
            name: "10-20 triệu",
            value: 2
        },
        {
            name: "20-30 triệu",
            value: 3
        },
        {
            name: "30-40 triệu",
            value: 4
        },
        {
            name: "trên 40 triệu",
            value: 5
        }
    ]
    var index = 0
    function a(n) {
        var e = document.querySelectorAll('.my-slide')
        var length = e.length
        if (n == 1) {
            e[index].style.display = "none"
            if (index == length - 4) {
                index = -1
                for (let i = 0; i < length; i++) {
                    e[i].style.display = "block"
                }
            }
            index++
            console.log('index +', index)
        } else {
            index--
            if (index > 0) {
                e[index].style.display = "block"
                if (index == length - 4) {
                    index = -1
                    for (let i = 0; i < length; i++) {
                        e[i].style.display = "block"
                    }
                }
            } else {
                index = 0
                e[index].style.display = "block"
            }
        }
    }

    return (
        <div>
            <div className="bg-white">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-2 d-flex justify-content-center align-items-center p-0">
                            <div ><h5>{datas[0] && datas[0].product_children_name}</h5></div>
                        </div>
                        <div className="col-8 p-0">
                            <div className='container abc position-relative'>
                                <div className='row row-slide'>
                                    {datas[0] && datas[0].subList.map((item, index) => {
                                        return (
                                            <div key={index} className='my-slide text-center col-3'>
                                                <div className="img-item-slide">
                                                    <img src={item.url_img} alt="img" width="40%" />
                                                </div>

                                                <p>{item.product_children_name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <i onClick={() => a(1)} className="fa click-right-product fa-chevron-right"></i>
                                <i onClick={() => a(2)} className="fa click-left-product fa-chevron-left"></i>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center p-0">
                            <div>
                                <h5>so sanh</h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <b className="text-center" style={{ fontSize: "15px" }}>{datas[0] && datas[0].title}</b>
                    <div className="nav navbar">
                        <div className="nav">
                            {ButtonOptions.map(item => (
                                <button onClick={() => handlePrice(item.value, setListProduct, listProductac)} className="btn-option" key={item.value}>{item.name}</button>
                            ))}
                        </div>
                        <div>
                            <div className="nav">
                                <button className="btn-delete-option">Bỏ tất cả bộ lọc</button>
                                <select className="btn-option">
                                    <option >Tình trạng</option>
                                    <option >New</option>
                                    <option >Like New</option>
                                </select>
                                <select onChange={(e) => changePrice(e.target.value, setListProduct, listProductac)} className="btn-sapxep">
                                    <option value={0}>Sắp xếp theo</option>
                                    <option value={1}>Giá thấp đến cao</option>
                                    <option value={2}>Giá cao đến thấp</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <h5 className="m-3">Danh Mục {datas[0] && datas[0].product_children_name}</h5>
                    {listProduct.length > 0 ? (<div className="row m-0">
                        {listProduct.map((product) => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        }

                        )}
                    </div>) : <h6 className="m-5">không tìm thấy sản phẩm phù hợp nào </h6>}
                </div>
            </div>
        </div>
    )
}

