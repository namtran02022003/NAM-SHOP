import { useEffect, useState } from "react"
import { listOption } from "../../js"


export default function FilterMenu({ listProduct,setListProduct,listProductac }) {
    const [arr, setArr] = useState([])
    // console.log(arr)
    // var newArr =[]
    // for (let index = 0; index < listProduct.length; index++) {
    //     for (let i = 0; i < arr.length; i++) {
    //        var b =  listProduct[index].product_name.includes(arr[i]) || 
    //         b ? newArr.push(listProduct[index]) :''
    //        }
    //    }
    //    console.log(newArr)
    return (
        <div>
            {listOption.map((item, index) => (
                <div key={item.heading}>
                    <h6>{item.heading}</h6>
                    <ul>
                        {item.content.map(item => (
                            <InputOption key={item.value} item={item} setArr={setArr} arr={arr} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
function InputOption({ item,setArr,arr }) {
   
    const handleFilter = (value) => {
        var index = arr.findIndex(item => (
            item == value
        ))
        if (index == -1) {
            setArr(arr =>[...arr,value])
        } else {
        var arrCopy = arr.filter(item =>(
            item !=value
          ))
          setArr(arrCopy)
        }        
    }
    return (
        <div >
            <li>
                <input value={item.value} onChange={() => handleFilter(item.value)} className="input-filter" type="checkbox" />
                {item.value} </li>
        </div>
    )
}