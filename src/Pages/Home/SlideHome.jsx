import axios from "axios"
import { useState, useEffect, useRef } from 'react'

export default function SlideHome() {
    const timeSlide = useRef()
    const refNext = useRef()
    const refBack = useRef()
    useEffect(() => {
        const mySlide = document.querySelectorAll('.my-slides')
        if (mySlide[0]) {
            var indexs = 1
            refBack.current.onclick = () => { clickSlide(-1) }
            refNext.current.onclick = () => { clickSlide(1) }
            function clickSlide(x) {
                showSlide(indexs += x)
            }
            showSlide(indexs)
            function showSlide(n) {
                if (n > mySlide.length) { indexs = 1 }
                if (n < 1) { indexs = mySlide.length }
                for (var i = 0; i < mySlide.length; i++) {
                    mySlide[i].style.display = 'none'
                }
                mySlide[indexs - 1].style.display = 'block'
            }
            var autoIndex = 0
            autoSlide()
            function autoSlide() {
                for (var i = 0; i < mySlide.length; i++) {
                    mySlide[i].style.display = 'none'
                }
                autoIndex++
                if (autoIndex > mySlide.length) { autoIndex = 1 }

                mySlide[autoIndex - 1].style.display = 'block'
                timeSlide.current = setTimeout(autoSlide, 3000)
            }
            return () => {
                clearTimeout(timeSlide.current)
            }
        }
    })
    const [listSlide, setListSlide] = useState([])
    const getDatas = async () => {
        const res = await axios.get('../../../json/ButtonPageContentLeft.json')
        setListSlide(res.data.listSlide)
    }
    useEffect(() => {
        getDatas()
    }, [])

    return (
        <div className="position-relative flex-slide w-100">
            {listSlide.map((img, index) => {
                return (
                    <div key={index} className="my-slides w-100">
                        <img className="img-slide-home" src={img.imgUrl} />
                    </div>
                )
            })}

            <i ref={refBack} className="fa click-right fa-chevron-right"></i>
            <i ref={refNext} className="fa click-left fa-chevron-left"></i>

        </div>
    )
}