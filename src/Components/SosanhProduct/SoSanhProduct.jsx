import { useState, useContext } from "react"
import { ShowSsProduct } from "../../App"
import { useNavigate } from "react-router-dom"
import './ss.css'
export default function SoSanhProduct({element,showSs,setShowSs}) {
    const Navitage = useNavigate()
    const dataShow = useContext(ShowSsProduct)
    const handleShow = () => {
      setShowSs(!showSs)
    }
    return (
        <>
            <button className="btn-xem-ss" onClick={() => Navitage(`/so-sanh`)}>Xem so sánh</button>  <button className="btn-chon-ss" onClick={() => handleShow()}>Chọn so sánh</button>
        </>
    )
}