import { Link } from "react-router-dom"




export default function FooterContent({ datas }) {
    return (
        <div className="footer-content div-apter">
            <Vemacone data={datas.vemacone} />
            <Common data={datas.hotro} />
            <Common data={datas.chinhsach} />
            <Common data={datas.youtobe} />
            <InterNet data={datas.internet} />
        </div>
    )
}

function InterNet({ data }) {
   
    if (data && data.url) {
        var url = data.url
        var url_img = data.img_url
       
        return (
            <div className="width20">
                <h6>{data.heading}</h6>
                <Link to={url}><img src={url_img} width="100%" /></Link>
            </div>
        )
    }
}

function Common({ data }) {
    if (data) {
        return (
            <div className="width20">
                <h6>{data.heading}</h6>
                {data.content ? data.content.map((item) => {
                    return (
                        <p key={item.heading}>
                            <Link className="color-white" to={`${item.url}`}>{item.heading}</Link>
                        </p>
                    )

                }) : ""}
            </div>
        )
    }
}

function Vemacone({ data }) {

    if (data) {
        return (
            <div className="width20">
                <h6>{data.item}</h6>
                <h6 className="color-green">{data.heading}</h6>
                <p>Giấy phép ĐKKD số {data.giayphep}</p>
                <p >Hotline tư vấn <span className="color-green fs-item-footer">{data.hotline}</span></p>
                <p >Bảo hành <span className="color-green fs-item-footer">{data.baohanh}</span> </p>
                <p >Thời gian làm việc <span className="color-green fs-item-footer">{data.thoigian}</span></p>
                <p>Email {data.email}</p>
            </div>
        )
    }
}