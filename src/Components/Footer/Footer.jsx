import axios from "axios"
import { useState, useEffect } from 'react'
import FooterTop from "./FooterTop"
import './Footer.css'
import FooterContent from "./FooterContent"
import FooterBottom from './FooterBottom'
export default function Footer() {
    const [dataTop, setDataTop] = useState([])
    const [dataContent, setDataContent] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/Footer.json')
        setDataTop(res.data.listFooterTop)
        setDataContent(res.data.listFooterContent)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div >
        <div className="bg-dark color-white">
            <div className="container px-5 py-3">
                <FooterTop datas={dataTop} />
            </div>
        </div>
        <div className="bg-footer-content color-white" >
            <div className="container px-5 div-apter">
            <FooterContent datas={dataContent} />
            <div className="py-3">
            <FooterBottom datas={dataContent}/>
            </div>
            </div>          
        </div>
        <div className="bg-dark color-white text-center">
            <p className="p-3 ">Copyright © 2022 - Bản quyền thuộc về Nam Shop.</p>
        </div>
        </div>
    )
}