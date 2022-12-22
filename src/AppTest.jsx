import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './AppTest.css'

export default function AppTest() {
    const [slides, setSlides] = useState([])
    const Res = useRef()
    const getData = async () => {
        const res = await axios.get('../../../json/jsontset.json')
        setSlides(res.data.listSlide)
    }
    useEffect(() => {
        getData()
    }, [])
var index = 0
function abc(){
    index++
    const e = document.querySelectorAll('.carousel-item')
    for(var i = 0;i<e.length;i++){
        e[i].classList.remove('active')
    }
e[index].classList.add('active')
}

    return (

        <div id="demo" className="carousel slide w-50 m-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                {slides.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            <img src={item.img} alt="Los Angeles" className="d-block w-50" />
                        </div>
                    )
                })}
               
            </div>


           <button onClick={()=>abc()}>lui</button>
           <button >tien</button>
        </div>
    )


}
