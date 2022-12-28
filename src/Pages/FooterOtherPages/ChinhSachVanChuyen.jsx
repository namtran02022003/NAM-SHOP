import axios from "axios"
import { useState, useEffect } from 'react'


function VanChuyen() {
    const [datas, setDatas] = useState([])
    const [addres, setAddRes] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.vanChuyen)
        setAddRes(res.data.gioithieu.content.listAddres)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="text-p">
            <h6>{datas.heading}</h6>
            <hr />
            {datas.text_heading && datas.text_heading.map((text) => (
                <p key={text}>{text}</p>
            ))}
            {
                <div className="f-b list-gioi-thieu">
                    <p className="f-b">{addres.name}</p>
                    <p>DKKD số: {addres.dkkd}</p>
                    <p>Hotline : {addres.phoneNumber}</p>
                    <p>Website: {addres.website}</p>
                    {addres.content && addres.content.map((item) => {
                        return (
                            <div key={item.phoneNumber}>
                                <p>{item.addres}</p>
                                <p>SDT: {item.phoneNumber}</p>
                            </div>
                        )
                    })}
                    {addres.note && addres.note.map(item => {
                        return (
                            <p key={item}>{item}</p>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default VanChuyen