import axios from "axios"
import { useState, useEffect } from 'react'


export default function SdideProduct() {
    const [datas, setDatas] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/Content.json')
        setDatas(res.data.listSlideProduct)
    }
    useEffect(() => {
        getDatas()
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
        <div className='container abc position-relative'>
            <div className='row row-slide'>
                {datas.map((product, index) => {
                    return (
                        <div key={product.id} className='my-slide text-center col-3'>
                            <img src={product.url_img} alt="img" width="100%" />
                            <p>{product.product_name}</p>
                        </div>
                    )
                })}
            </div>
            <i onClick={() => a(1)} className="fa click-right-product fa-chevron-right"></i>
            <i onClick={() => a(2)} className="fa click-left-product fa-chevron-left"></i>


        </div>
    )
}