import { Link } from "react-router-dom";



export default function HeaderTop(){
    return(
        <div className="bg-header-top">
            <div className="header-top container px-5 d-flex ">
            <div className="d-flex">
                <p className="">Mac One: Uy tín trong rừng sản phẩm</p>
                <div className="div-border"></div>
                <p className="">Hotline: 0372770547</p>
            </div> 
            <div>
                <div className="d-flex">
                    <Link to={'/gioithieu'} className="btn-header-top">Giới thiệu</Link>
                    <Link to={''} className="btn-header-top">Liên hệ</Link>
                    <Link to={''} className="btn-header-top">Giỏ hàng</Link>
                </div>
            </div>
        </div>
        </div>
    )
}