import axios from "axios"
import { useState, useEffect } from 'react'


export default function LienHe() {
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.gioithieu)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h5>Liên hệ</h5>
            <hr />
            {
                datas.content ? <div className="f-b list-gioi-thieu">
                    <p className="f-b">{datas.content.listAddres.name}</p>
                    <p>DKKD số: {datas.content.listAddres.dkkd}</p>
                    <p>Hotline : {datas.content.listAddres.phoneNumber}</p>
                    <p>Website: {datas.content.listAddres.website}</p>
                    {datas.content.listAddres.content.map((item) => {
                        return (
                            <div key={item.phoneNumber}>
                                <p>{item.addres}</p>
                                <p>{item.phoneNumber}</p>
                            </div>
                        )
                    })}
                    {datas.content.listAddres.note.map(item => {
                        return (
                            <p key={item}>{item}</p>
                        )
                    })}
                </div>
                    : ''}

        </div>
    )

}


