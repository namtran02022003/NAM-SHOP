import { useNavigate } from "react-router-dom"
function SlideTop({item}){
    const Navitage = useNavigate()
    return (
        <div  className='my-slide text-center col-3'>
            <div className="img-item-slide">
                <img style={{
                    cursor:"pointer"
                }} onClick={()=> Navitage(`/${item.url}`)} src={item.url_img} alt="img" width="40%" />
            </div>
            <p>{item.product_children_name}</p>
        </div>
    )
}


export default SlideTop
