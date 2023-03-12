import axios from "axios"
import { useState, useEffect } from 'react'
export default function SdideProduct() {
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/Products.json')
        setDatas(res.data.products)
    }
    useEffect(() => {
        getDatas()
    }, [])
    var index = 0
    function slideShow(n) {
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
    //    <div>
    //     <h3>Các sản phẩm nổi bật:</h3>
    //      <div className='container p-0 bg-white abc position-relative'>
    //         <div className='row row-slide'>
    //             {datas.map((product, index) => {
    //                 return (
    //                     <div key={product.id} className='my-slide text-center col-3'>
    //                         <img src={product.url_img} alt="img" width="100%" />
    //                         <div class="text-detail-product ">
    //                             <p>{product.product_name}</p>
    //                             <p class="text-thong-so">{product.thongso}</p>
    //                             </div>
    //                         <p className="text-price ">{product.price.toLocaleString()} đ</p>
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //         <i onClick={() => a(1)} className="fa click-right-product fa-chevron-right"></i>
    //         <i onClick={() => a(2)} className="fa click-left-product fa-chevron-left"></i>
    //     </div>
    //    </div>
    <div></div>
    )
}