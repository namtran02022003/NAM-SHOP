
import axios from "axios"
import { useState, useEffect } from 'react'


export default function ThanhToan() {
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.chinhSachThanhToan)
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(datas)
    return (
        <div className="text-p">
            <h5>{datas.heading}</h5>
            <hr />
            <p>{datas.text_heading}</p>
            {datas.tienmat && <div>
                <h5> {datas.tienmat.heading}</h5>
                {datas.tienmat.content.map((item, index) => (
                    <div key={index}>
                        <h6>{item.heading}</h6>
                        <p>{item.content}</p>
                    </div>
                ))}
                {datas.atm && <div>
                    <h5>{datas.atm.heading}</h5>
                    <p>{datas.atm.text_heading}</p>
                </div>}
                {datas.ck && <div>
                    <h5>{datas.ck.heading}</h5>
                    <p>{datas.ck.text_heading}</p>
                </div>}

            </div>
            }


        </div>
    )
}