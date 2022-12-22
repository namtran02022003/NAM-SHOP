import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HeaderBottom() {
    const [listButton, setListButton] = useState([])
    const getData = async () => {
        const res = await axios.get('../../../json/ButtonPageHeader.json')
        setListButton(res.data.list)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="bg-header-bottom ">
            <div className="header-bottom container px-5">
                <div className="row m-0 align-items-center">
                    <div className="col-2 p-0">
                        <div className="logo">
                            <Link to={'/'}>    <img src="https://macone.vn/wp-content/uploads/2019/08/Logo-MacOne.png" alt="logo" width="100%" /></Link>
                        </div>
                    </div>
                    <div className="col-8 p-0 ">
                        <ul className="list-button-header-buttom ">
                            {listButton.map((item1, index) => {
                                return (
                                    <li key={index} className="position-relative list-button-header-bottom-li">
                                        <Link to={item1.url} className="list-button-heading">{item1.heading}</Link>
                                        <ul className="menu-none menu-item1">
                                            {item1.menu ? item1.menu.map((item2, index) => {
                                                return (
                                                    <li className="menu-item1-li position-relative" key={index}>
                                                        <Link to={item2.url} className="menu-item1-li-a">{item2.heading}</Link>
                                                        <ul className="menu-none-item">
                                                            {item2.menu ? item2.menu.map((item3, index) => {
                                                                return (
                                                                    <li className="menu-none-item-li" key={item3.heading}>
                                                                        <Link to={item3.url} className="menu-item1-li-a2">{item3.heading}</Link>
                                                                    </li>
                                                                )
                                                            }) : ''}
                                                        </ul>
                                                    </li>
                                                )
                                            }) : ''}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-2 p-0">
                        <div className="search position-relative">
                            <form className="position-relative">
                                <input className="input-search w-100" type="text" placeholder="tìm kiếm sản phẩm" />
                                <i className="fa-solid icon-search fa-magnifying-glass"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}