import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './ss.css'
import { ShowSsProduct } from "../../App"
export default function SoSanhProduct({element,showSs,setShowSs}) {
    const datas = useContext(ShowSsProduct)
    // const [length_id,setLength_id] = useState(datas.listId) 
    const Navitage = useNavigate()
    const [a,setA] = useState(false)
    const handleShow = () => {
      setShowSs(!showSs)
      setA(!a)
    }
  
    var check = datas.listId.length>1
    return (
        <>
               {a ? <button disabled={check ? false : true} className={`btn-dat ${!check && 'btn-dis'}`} onClick={() => Navitage(`/so-sanh`)}>Xem so sánh({datas.listId.length})</button> :<button className="btn-dat" onClick={() => handleShow()}>Chọn so sánh</button>}
        </>
    )
}