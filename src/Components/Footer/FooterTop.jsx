


export default function FooterTop({datas}){
    return(
        <div className="footer-top">
            <div className="row m-0 ">
                {datas.map((data,index)=>{
                    return(
                        <div key={index} className="col-3 p-0">
                            <div className="row align-items-center">
                                <div className="col-2 p-0">
                                    <i className={data.icon + ' icon-4'} />
                                </div>
                                <div className="col-10 p-0">
                                    <h6 className="m-0">{data.heading}</h6>
                                    <p className="m-0">{data.text_p}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}