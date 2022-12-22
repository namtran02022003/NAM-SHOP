import axios from "axios"
import { useState, useEffect } from 'react'


export default function HuongDan() {
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.huongdan)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h5> {datas.heading}</h5>
            <hr />
            {datas.content && datas.content.map((item) => {
                return (
                    <p className="my-2" key={item.item}>
                        <span className="f-b">{item.item}: </span>
                        {item.content}
                    </p>
                )
            })}
        </div>
    )
}