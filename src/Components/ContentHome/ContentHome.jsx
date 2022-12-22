import axios from "axios"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Product from "../Products/Product"
import './ContentHome.css'
export default function ContenHome(props) {
    const Navitage = useNavigate()
    const [datas, setDatas] = useState([])
    const [listProduct, setListProduct] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/Products.json')
        const kq = res.data.category.filter((item) => (item.category_id === props.category_id))
        var category = kq[0].subList.filter(item => item.id_children1 === props.children1_id)
        const categoryidProduct = res.data.products.filter(product => product.category_id == props.category_id)
        const listProducts = categoryidProduct.filter(product => product.id_children1 == category[0].id_children1)
        setListProduct(listProducts)
        setDatas(category)
    }
    useEffect(() => {
        getDatas()
    }, [])
    return (
        <div className="my-5">
            <div className="row ">
                <div className="col-2 p-0 position-relative  bg-white">
                    {datas.map((item) => (<Link to={item.url} key={item.url}> <h6 className="heading-item-content-home m-0" >{item.product_children_name}</h6></Link>))}
                    <div className="p-2">
                        <ul className="ul-content-home">
                            {datas[0] && datas[0].subList && datas[0].subList.map((item, index) => {
                                return (
                                    <Link to={item.url} key={index}><i className="fa fa-caret-right"></i>{item.product_children_name}</Link>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    {datas.map((item, index) => <span className="text-all-product" key={index} onClick={() => Navitage(item.url)}>Xem tất cả </span>)}
                </div>
                <div className="col-10 ">
                    <div style={{ marginLeft: "-8px" }} className="row ">
                        {listProduct.map((product, index) => {
                            if (index < 8) {
                                return (
                                    <Product key={index} product={product} />
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}