import axios from "axios"
import { useState, useEffect, useReducer } from 'react'
import './ItemProduct.css'
import FilterMenu from "./FilterMenu"
import Product from "../../Components/Products/Product"
import { SlideItemProduct } from "../../js"
import SlideTop from "../../Components/SlidesTop"
import SoSanhProduct from "../../Components/SosanhProduct/SoSanhProduct"
import { reducer, handleStateReducer, CHANGE_PRICE, SORT, STATUS, REMOVESTATE, ButtonOptions } from '../../js/Reducer'

export default function PageItem(props) {
    const [showSs, setShowSs] = useState(false)
    const [datas, setDatas] = useState([])
    const [listProductac, setListProductac] = useState([])
    const [listProduct, setListProduct] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/Products.json')
        const datas = res.data.category.filter(item => item.category_id === props.category_id)//1
        const products = res.data.products.filter(product => product.category_id === props.category_id)
        setListProductac(products)
        setDatas(datas)
        setListProduct(products)
    }
    useEffect(() => {
        getData()
    }, [])
    const initState = {
        optionPrice: 0,
        status: 0,
        sort: 0,
        textSearch: '',
    }
    const [stateReduce, dispatch] = useReducer(reducer, initState)
    useEffect(() => {
        handleStateReducer(listProductac, setListProduct, stateReduce)
    }, [stateReduce])
    document.documentElement.scrollTop = 0

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
                                <i onClick={() => SlideItemProduct(1)} className="fa click-right-product fa-chevron-right"></i>
                                <i onClick={() => SlideItemProduct(2)} className="fa click-left-product fa-chevron-left"></i>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center p-0">
                            <div>
                                <SoSanhProduct showSs={showSs} setShowSs={setShowSs} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <b className="text-center" style={{ fontSize: "15px" }}>{datas[0] && datas[0].title}</b>
                    <div className="nav navbar">
                        <div className="nav">
                            {ButtonOptions.map(item => (
                                <button onClick={() => dispatch(CHANGE_PRICE(item.value))} className={`btn-option ${stateReduce.optionPrice == item.value && ' bg-info'}`} key={item.value}>{item.name}</button>

                            ))}
                        </div>
                        <div>
                            <div className="nav">
                                <button onClick={() => dispatch(REMOVESTATE)} className="btn-delete-option">Bỏ tất cả bộ lọc</button>
                                <select value={stateReduce.status} onChange={(e) => dispatch(STATUS(e.target.value))} className="btn-option">
                                    <option value={0}>Tình trạng</option>
                                    <option value={'NEW'}>New</option>
                                    <option value={'Like New'}>Like New</option>
                                </select>
                                <select value={stateReduce.sort} onChange={(e) => dispatch(SORT(e.target.value))} className="btn-sapxep">
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
                    <div className="row m-0">
                        <div className="col-2 bg-white">
                            <FilterMenu onDispatch={dispatch} stateReduce={stateReduce} /* listProduct={listProduct} setListProduct={setListProduct} listProductac={listProductac} */ />

                        </div>
                        <div className="col-10">
                            <h5 className="m-3">Danh Mục {datas[0] && datas[0].category_name}</h5>
                            {listProduct.length > 0 ? (<div className="row m-0">
                                {listProduct.map((product) => {
                                    return (
                                        <Product showSs={showSs} setShowSs={setShowSs} key={product.id} product={product} />
                                    )
                                }

                                )}
                            </div>) : <h6 className="m-5">không tìm thấy sản phẩm phù hợp nào </h6>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}