import axios from "axios"
import { useState, useEffect } from 'react'


export default function BaoMat(){
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.baoMatThongTin)
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <div className="text-p">
            <h6>{datas.heading}</h6>
            <hr></hr>
            <p>{datas.text_heading}</p>
            {datas.content && datas.content.map((item,index)=>(
                <div key={index}>
                    <h6 className="my-3">{item.item}</h6>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    )
}