import axios from "axios"
import { useState, useEffect } from 'react'
import './FooterOther.css'
export default function GioiThieu() {
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
            <h5>{datas.heading}</h5>
            <hr />
            {datas.content ? <div>
                <h6 className="text-center">{datas.content.heading}</h6>
                <iframe width="100%" height="500" src={datas.content.url_video} ></iframe>
                <div >
                    {datas.content.content.map((item) => (
                        <div key={item.heading}>
                            <b className="my-2">{item.heading}</b>
                            <p className="my-2">{item.item}</p>
                            {item.url_img ? <img src={item.url_img} alt="img macone" width="100%" /> : ''}
                        </div>
                    ))}
                </div>
                <hr />
                {
                    <div className="f-b list-gioi-thieu">
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
                }
            </div> : ""}


        </div>
    )
}
