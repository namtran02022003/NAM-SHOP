import { Link } from "react-router-dom";
import { useContext } from 'react'

import { CartProducts } from "../../App";
export default function HeaderTop(){
    const dataCarts = useContext(CartProducts)
    return(
        <div className="bg-header-top">
            <div className="header-top container px-5 d-flex ">
            <div className="d-flex">
                <p className="">Nam Shop: Uy tín trong rừng sản phẩm</p>
                <div className="div-border"></div>
                <p className="">Hotline: 0372770547</p>
            </div> 
            <div>
                <div className="d-flex">
                    <Link to={'/gioithieu'} className="btn-header-top">Giới thiệu</Link>
                    <Link to={'/lien-he'} className="btn-header-top">Liên hệ</Link>
                    <Link to={'/cart'} className="btn-header-top position-relative">Giỏ hàng
                    <span className="count-carts">
                        {
                            dataCarts.Carts.length
                        }
                    </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}