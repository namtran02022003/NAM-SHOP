import { useState, useContext } from "react"
import { ShowSsProduct } from "../../App"
import { useNavigate } from "react-router-dom"

export default function SoSanhProduct() {
    const Navitage = useNavigate()
    const dataShow = useContext(ShowSsProduct)
    const handleShow = () => {
        dataShow.setShowSs(!dataShow.showSs)
    }
    return (
        <>
            {dataShow.listId.length > 0 ?<button onClick={() => Navitage(`/so-sanh`)}>Xem so sánh</button>  : <button onClick={() => handleShow()}>Chọn so sánh</button> }
        </>
    )
}