import axios from "axios"
import { useState, useEffect, useRef } from 'react'
import SlideTop from "../../Components/CommonComponent"


import Product from "../../Components/Products/Product"
import { ButtonOptions,changePrice,changeNew,handlePrice } from "../../js"
export default function OtherPages() {
    const [styBtn,setStyleBtn] = useState('')
    const [datas, setDatas] = useState([])
    const [listProductac, setListProductac] = useState([])
    const [listProduct, setListProduct] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/Products.json')
        const datas = res.data.category.filter(item => item.category_id === 3)
        const products = res.data.products.filter(product => product.category_id === 3)
        setListProductac(products)
        setDatas(datas)
        setListProduct(products)
    }
    useEffect(() => {
        getData()
    }, [])
   
   
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
   console.log(datas)
    return (
        <div>
            <div className="bg-white">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-2 d-flex justify-content-center align-items-center p-0">
                            <div ><h5>{datas[0] && datas[0].category_name}</h5></div>
                        </div>
                        <div className="col-8 p-0">
                            <div className='container abc position-relative'>
                                <div className='row row-slide'>
                                    {datas[0] && datas[0].subList.map((item, index) => {
                                        return (
                                            <SlideTop key={index} item={item} />
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
                                <button onClick={()=>handlePrice(item.value,setListProduct,listProductac,setStyleBtn)} className={`btn-option ${styBtn == item.value && ' bg-info'}`} key={item.value}>{item.name}</button>
                            ))}
                        </div>
                        <div>
                            <div className="nav">
                                <button className="btn-delete-option">Bỏ tất cả bộ lọc</button>
                                <select onChange={(e) => changeNew(e.target.value,setListProduct,listProductac,setStyleBtn)} className="btn-option">
                                    <option value={0}>Tình trạng</option>
                                    <option value={1}>New</option>
                                    <option value={2}>Like New</option>
                                </select>
                                <select onChange={(e) => changePrice(e.target.value,setListProduct,listProductac,setStyleBtn)} className="btn-sapxep">
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
                    
                       
                       
                        <h5 className="m-3">Danh Mục {datas[0] && datas[0].category_name}</h5>
                          {listProduct.length >0 ? (  <div className="row m-0">
                                {listProduct.map((product) => {
                                    return (
                                        <Product key={product.id} product={product} />
                                    )
                                }

                                )}
                            </div>):<h6 className="m-5">không tìm thấy sản phẩm phù hợp nào </h6>}
                      
                    
                </div>
            </div>
        </div>
    )
}