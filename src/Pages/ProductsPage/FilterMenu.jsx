import { useEffect, useState } from "react"
import { listOption } from "../../js"


export default function FilterMenu({ listProduct, setListProduct, listProductac }) {
    const [arr, setArr] = useState([])


    useEffect(() => {
        var newArr = []
        if (arr.length > 0) {
            listProductac.map(product => {
                arr.filter(text => {
                    var b = (product.thongso_search || product.thongso).includes(text)
                    b ? newArr.push(product) : ''
                })
            })
            var arrm = Array.from(new Set(newArr))
            setListProduct(arrm)
        } else {
            setListProduct(listProductac)
        }
    }, [arr])
    return (
        <div>
            {listOption.map((item, index) => (
                <div key={item.heading}>
                    <h6>{item.heading}</h6>
                    <ul className="ul-filter-menu">
                        {item.content.map(item => (
                            <InputOption key={item.value} item={item} setArr={setArr} arr={arr} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
function InputOption({ item, setArr, arr }) {
    const handleFilter = (value) => {
        var index = arr.findIndex(item => (
            item == value
        ))
        if (index == -1) {
            setArr(arr => [...arr, value])
        } else {
            var arrCopy = arr.filter(item => (
                item != value
            ))
            setArr(arrCopy)
        }
    }
    return (
        <div >
            <li>
                <input value={item.value} onChange={() => handleFilter(item.value)} className="input-filter" type="checkbox" />
                {item.name} </li>
        </div>
    )
}