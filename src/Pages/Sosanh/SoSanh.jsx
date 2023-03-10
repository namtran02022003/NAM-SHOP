
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { ShowSsProduct,CartProducts } from "../../App"
import { HandleCart } from "../../js"
import { useNavigate } from "react-router-dom"
export default function SoSanh() {
    const Navitage = useNavigate()
    const dataShow = useContext(ShowSsProduct)
    const dataCarts = useContext(CartProducts)
    const [listProductSs, setListProductSs] = useState([])
    const getDataSs = async () => {
        const res = await axios.get('../../../json/Products.json')
        res.data.products.forEach(product => {
            for (let i = 0; i < dataShow.listId.length; i++) {
                if (product.id == dataShow.listId[i]) {
                    setListProductSs(pr => [...pr, product])
                } else {
                }
            }
        })
    }
    useEffect(() => {
        if (dataShow.listId.length > 0) {
            getDataSs()
        }
    }, [])
    return (
        <div className="bg-white">
            <button className="btn btn-dark" onClick={()=>{
                localStorage.setItem('listIdSs',JSON.stringify([]))
                setListProductSs([])
                dataShow.setListId([])
            }}>remove</button>
            <div className="container px-5">
                <div className="row">
                    {listProductSs.map(product => (
                        <div key={product.id} className="col-4">
                            <div className="bg-white border ">
                                <div className="text-center">
                                    <img src={product.url_img} width="50%" alt="img product" />
                                </div>
                                {product.thongso_all && product.thongso_all.length>0 && product.thongso_all.map((item,index)=>(
                                    <div className="p-3 border-bottom" key={index}>
                                        <b>{item.title}</b>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                                <p className="p-3 border-bottom">Giá bán: <span className="text-price">{product.price.toLocaleString()} đ</span></p>
                                <p className="p-3 text-center">
                            <button onClick={()=>HandleCart(product,dataCarts,false,Navitage)} className="btn-dat">Thêm vào giỏ hàng</button>        
                            </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}