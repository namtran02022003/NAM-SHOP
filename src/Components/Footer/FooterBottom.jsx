import { Link } from "react-router-dom"




export default function HeaderBottom({ datas }) {
 
    return (
        <div className="row m-0 fs-item-footer">
            <div className="col-6 p-0">
                <div className="row m-0">
                    <div className="col-6 p-0">
                        {datas.addresHanoi && datas.addresHanoi.content ? (
                            <>
                                <h6>{datas.addresHanoi.heading}</h6>
                                {datas.addresHanoi.content.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{item.addres}</p>
                                            <p>SDT: <span className="color-green">{item.phoneNumber}</span></p>                                          
                                        </div>
                                    )
                                })}
                                  { <p className=" opacity-75">{datas.addresHanoi.note}</p>}
                            </>
                        ) : ""}
                    </div>
                    <div className="col-6">
                    {datas.addresHCM && datas.addresHCM.content ? (
                            <>
                                <h6>{datas.addresHCM.heading}</h6>
                                <p className="color-white">{datas.addresHCM.addres}</p>
                                <p>SDT <span className="color-green">{datas.addresHCM.phoneNumber}</span></p>
                                { <p className="my-2 opacity-75">{datas.addresHCM.note}</p>}
                                <p>Sản phẩm nổi bật: {datas.addresHCM.content.map((item)=>{
                                    return(
                                        <Link className="color-green" key={item.item} to={item.url}><span>{item.item}</span></Link>
                                    )
                                })}</p>
                            </>
                        ) : ""}
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="text-center">
                    <img src={datas.logofooter} alt="imglogo" width="80%" />
                </div>
            </div>
        </div>
    )
}