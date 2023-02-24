import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import './ss.css'
export default function SoSanhProduct({element,showSs,setShowSs}) {
    const Navitage = useNavigate()
    const [a,setA] = useState(false)
    const handleShow = () => {
      setShowSs(!showSs)
      setA(!a)
    }
    return (
        <>
            {a && <button className="btn-dat" onClick={() => Navitage(`/so-sanh`)}>Xem so sánh</button>}  {a ? '' :<button className="btn-dat" onClick={() => handleShow()}>Chọn so sánh</button>}
        </>
    )
}