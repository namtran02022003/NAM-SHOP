import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
export default function MenuLeftHome() {
    const [listButton, setListButton] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/ButtonPageContentLeft.json')
        setListButton(res.data.listButton)
    }
    useEffect(() => {
        getDatas()
    }, [])
    return (
        <div className="home-menu-left">
            <ul className="home-menu-left-ul position-relative">
                {listButton.map((item, index) => {
                    return (
                        <li key={index} className="home-menu-left-li ">
                            <img src={item.icon} width="30px" />
                            <Link className="color-white a-item" to={item.url}>{item.heading}</Link>
                            {item.menu ? <div className="home-menu-ul-none shadow ">
                                <div className="d-flex">
                                    <div className="menu-home-left-70">
                                        {item.menu.map((item, index) => {
                                            return (
                                                <Link to={item.url} key={index} className=" color-black li-item-float-50">{item.heading}</Link>
                                            )
                                        })}
                                    </div>
                                    <div className="menu-home-left-30 home-menu-left-img-item">
                                        <img src={item.img_url} alt="img" />
                                    </div>
                                </div>
                            </div> : ''}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
