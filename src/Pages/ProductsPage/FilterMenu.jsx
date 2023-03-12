import { useEffect, useState } from "react"
import { listOption } from "../../js"


export default function FilterMenu({ onDispatch, stateReduce }) {
    return (
        <div>
            {listOption.map((item, index) => (
                <div key={item.heading}>
                    <h6>{item.heading}</h6>
                    <ul className="ul-filter-menu">
                        {item.content.map(item => (
                            <InputOption key={item.value} item={item} onDispatch={onDispatch} stateReduce={stateReduce} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
function InputOption({ item, onDispatch, stateReduce }) {

    const TEXTSEARCH = (payload) => {
        return {
            type: 'textsearch',
            value: payload
        }
    }

    return (
        <div >
            <li>
                <input checked={item.value == stateReduce.textSearch ? true : false} value={item.value} onChange={() => onDispatch(TEXTSEARCH(item.value))} className="input-filter" type="checkbox" />
                {item.name} </li>
        </div>
    )
}