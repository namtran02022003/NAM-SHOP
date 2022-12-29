import axios from "axios"
import { useState, useEffect } from 'react'


export default function ChinhSachDatHang() {
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.chinhSachDatHang)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className="text-p">
                <h5>{datas.heading}</h5>
                <hr />
                <i>{datas.text_heading}</i>
                {datas.content && datas.content.map((item, index) => (
                    <div key={index}>
                        <h6>{item.heading}</h6>
                        {item && item.content.map(item => {
                            return (
                                <p key={item}>{item}</p>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}