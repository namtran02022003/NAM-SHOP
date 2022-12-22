import { useEffect, useState } from "react"
import { listOption } from "../../js"


export default function FilterMenu({ datas }) {

    const a = document.querySelectorAll('.input-filter')

    return (
        <div>
            {listOption.map((item, index) => (
                <div key={item.heading}>
                    <h6>{item.heading}</h6>
                    <ul>
                        {item.content.map(item => (
                            <InputOption key={item.value} item={item} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
function InputOption({ item }) {
    const [check,setCheck] = useState(false)
    const handleFilter = (value) => {
       setCheck(!check)
        console.log(value)
    }
    return (
        <div >
            <li>
                <input value={item.value} onChange={() => handleFilter(item.value)} checked={check} className="input-filter" type="checkbox" />
            </li>
        </div>
    )
}