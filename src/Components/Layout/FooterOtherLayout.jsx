import './Layout.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function FooterLayout({children}) {
    const [dataGioiThieu, setDataGioiThieu] = useState([])
    const [dataChinhSach, setDataChinhSach] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/Footer.json')
        setDataGioiThieu(res.data.listFooterContent.hotro)
        setDataChinhSach(res.data.listFooterContent.chinhsach)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Header />
            <div className="container my-3">
              <div className="row m-0">
                <div className="col-8 p-0">  {children}</div>
                <div className="col-4 p-0">
                  <div style={{
                    width:'65%',
                    border:"1px dashed #666"
                  }} className=' m-auto'>
                  <p className='p-heading-footer-layout'> {dataGioiThieu.heading}</p>
                  <ul className="ul-layout-footer">
                    {
                        dataGioiThieu.content ? (
                            dataGioiThieu.content.map((item)=>(
                                <Link key={item.url} to={item.url} ><li >{item.heading}</li></Link>
                            ))
                        ):''
                    }
                  </ul>
                  <p className='p-heading-footer-layout'> {dataChinhSach.heading}</p>
                  <ul className="ul-layout-footer">
                    {
                        dataChinhSach.content ? (
                            dataChinhSach.content.map((item)=>(
                                <Link key={item.url} to={item.url} ><li >{item.heading}</li></Link>
                            ))
                        ):''
                    }
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </>
    )
}
export default FooterLayout