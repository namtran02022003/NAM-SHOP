
import axios from "axios"
import { useState, useEffect } from 'react'

export default function BaoHanh() {
    const [datas, setDatas] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/FooterOtherPages.json')
        setDatas(res.data.baohanhvadoitra)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="text-p">
            <h5>{datas.heading}</h5>
            <hr />
            <i>{datas.text_heading}</i>
            {datas.bhNew && (
                <div className="my-3">
                    <h6>{datas.bhNew.heading}</h6>
                    <p>{datas.bhNew.text_heading}</p>
                    <div>
                        {
                            datas.bhNew.content.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <b>{item.heading}</b>
                                        {item.content.map((chil) => {
                                            return (
                                                <p key={chil}>{chil}</p>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
            {datas.bhCu && (
                <div className="my-3">
                    <h6>{datas.bhCu.heading}</h6>
                    <p>{datas.bhCu.text_heading}</p>
                    <div>
                        {
                            datas.bhCu.content.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <b>{item.heading}</b>
                                        {item.content.map((chil) => {
                                            return (
                                                <p key={chil}>{chil}</p>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
            {datas.dataCaNhan && <div>
                <h5>{datas.dataCaNhan.heading}</h5>
                {datas.dataCaNhan.content && datas.dataCaNhan.content.map((item) => {
                    return (<p key={item}>{item}</p>)
                })}
            </div>}
            {datas.addresBh && <div>
                <h5>{datas.addresBh.heading}</h5>
                {datas.addresBh.content.map(item =>(
                    <p key={item}>{item}</p>
                ))}
            </div>}
        </div>
    )
}