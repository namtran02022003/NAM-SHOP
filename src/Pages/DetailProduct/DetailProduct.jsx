import './index.css'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import { CartProducts } from '../../App'
import { HandleCart } from '../../js'
import { useForm } from 'react-hook-form'
function DetailProduct() {
    document.documentElement.scrollTop = 0
    const Navitage = useNavigate()
    const dataCarts = useContext(CartProducts)
    const [productDetail, setProductDetail] = useState([])
    const [img, setImg] = useState('')
    const [check, setCheck] = useState(false)
    const { id } = useParams()
    const getData = async () => {
        const res = await axios.get('../../../json/Products.json')
        const product = res.data.products.filter(product => Number(product.id) === Number(id))
        setProductDetail(product)
    }
    useEffect(() => {
        getData()
    }, [])
    const handleChange = () => {
        setCheck(!check)
    }

    const showModalForm = () => {
        document.querySelector('.login-form-detail').style.display = "flex"
    }
    useEffect(() => {
        const hideForm = (e) => {
            var element = document.querySelector('.login-form-detail')
            if (e.target == element) {
                element.style.display = "none"
            }
        }
        window.addEventListener('click', hideForm)
        return (() => {
            window.removeEventListener('click', hideForm)
        })
    }, [])
    return (
        <div className="bg-white">
            <div className="container pt-5 d-flex">
                <div className="col-5">
                    <div className="text-center">
                        {productDetail.map(product => (
                            <img style={{
                                maxHeight: "270px"
                            }} key={product.id} src={img || product.url_img} width="60%" alt="img product" />
                        ))}
                    </div>
                    <div className='slide-product-detail d-flex justify-content-center'>
                        {productDetail[0] && productDetail[0].img_detail && productDetail[0].img_detail.map((url, index) => (
                            <div className='img-slide-detail' key={index} >
                                <img onClick={() => setImg(url)} src={url} width="100%" />
                            </div>
                        ))}

                    </div>
                    <div className='text-center fs-14 my-3'>
                        <i>MacOne là đại lý bán lẻ ủy quyền các nhà phân phối chính hãng Apple Việt Nam</i>
                        <p>Sản phẩm chính hãng Apple mới 100% nguyên seal. Phụ kiện chính hãng gồm:</p>
                        <p>hộp trùng imei, sạc, cable, sách hướng dẫn</p>
                    </div>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-7">
                            <div>
                                {productDetail.map(product => (
                                    <h5 key={product.id}>{product.product_name} {product.thongso}</h5>
                                ))}
                                <div className='row'>
                                    <div className="col-6">
                                        {productDetail.map(product => (
                                            <b key={product.id}>{check ? (product.price + 390000).toLocaleString() : product.price.toLocaleString()} ₫</b>
                                        ))}
                                    </div>
                                    <div className="col-6">
                                        <p><img src="https://macone.vn/wp-content/themes/macone/images/mess-01.svg" width="30px" /> chat để được tư vấn</p>
                                    </div>
                                </div>

                                {productDetail[0] && <img src={productDetail[0].url_imgsale} width="100%" />}
                                <div className='text-baohanh p-2'>
                                    {productDetail[0] && productDetail[0].text_baohanh && productDetail[0].text_baohanh.map(text => (
                                        <p className='fs-13' key={text}><i className="fa color-green me-2 fa-check-circle"></i>{text}</p>
                                    ))}
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-1'>
                                        <input style={{
                                            width: "20px",
                                            height: "40px"
                                        }} checked={check} onChange={() => handleChange(productDetail[0] && productDetail[0].id)} type="checkbox" />
                                    </div>
                                    <div className='col-8 fs-13'>
                                        <b className='fs-14'>Gói bảo hành MacOne Care +390.000 ₫ </b>
                                        <p>Bảo hành 1 đổi 1 nguyên seal 30 ngày</p>
                                    </div>
                                    <div className='col-3'>
                                        <img src='https://macone.vn/wp-content/themes/macone/images/bhv.png?v=1' width="100%" />
                                    </div>
                                </div>
                                <div className='thongso-tom-tat fs-13'>
                                    <h6>Thông số tóm tắt</h6>
                                    {productDetail[0] && productDetail[0].thongso_all && productDetail[0].thongso_all.map((ts, index) => (
                                        index < 5 ? <p key={ts.title}>-{ts.title}: {ts.content}</p> : ''
                                    ))}
                                </div>
                                <div className='text-center '>
                                    <div onClick={() => showModalForm()} className='btn-muangay text-center'>
                                        <h4>MUA NGAY</h4>
                                        <p>Giao hàng tận nhà hoặc nhận tại cửa hàng</p>
                                    </div>
                                    <div className='d-flex justify-content-between text-center m-0 mt-2'>
                                        <div onClick={() => HandleCart(productDetail[0], dataCarts, check, Navitage)} className="w-49 btn-muangay">
                                            <h6>THÊM VÀO GIỎ</h6>
                                            <p>Chọn thêm món đồ khác</p>
                                        </div>
                                        <div className="w-49 btn-muangay">
                                            <h6>MUA TRẢ GÓP</h6>
                                            <p>Thủ tục đơn giản</p>
                                        </div>
                                    </div>
                                    <p>Gọi đặt mua: 0936.096.900</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="quatang">
                                <p>Mua máy tính tặng túi chống sốc, miễn phí cài phần mềm…</p>
                            </div>
                            <ChinhSach />
                            <div className=''>
                                <img src='../../../images/logoface.jpg' width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='thongso-all'>
                    <h5>Thông số kỹ thuật</h5>
                    <table className='w-100 table-thongso'>
                        <tbody>
                            {productDetail[0] && productDetail[0].thongso_all && productDetail[0].thongso_all.map((ts, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ts.title}</td>
                                        <td>{ts.content}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='login-form-detail '>
                <LoginFormDetail data={productDetail} check={check} />
            </div>
        </div>
    )
}
export default DetailProduct

function LoginFormDetail({ data, check }) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (datas) => {
        const value = {
            cart: data,
            dataUser: datas,
            totalPrice: data.reduce((a, b) => a + (check ? b.price + Number(390000) : b.price), 0)
        }
    }
    return (
        <div className='content-form-detail p-2'>
            <div className='row -m-0'>
                <div className='col-3'>
                    {data.map(product => (
                        <img key={product.id} src={product.url_img} width="100%" alt='img detailproduct' />
                    ))}
                </div>
                <div className='col-9'>
                    {data.map(product => (
                        <div key={product.id}>
                            <p className='color-red fs-5'>{product.product_name} {product.thongso}</p>
                            <p className='color-red fs-4 f-b'>{check ? (product.price + Number(390000)).toLocaleString() : product.price.toLocaleString()}đ</p>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row m-0'>
                    <div className="col-6">
                        <div className='position-relative'>
                            <input className='w-100 input-cart' type="text" placeholder="Họ và tên"
                                {...register("fullName", {
                                    required: true,
                                    minLength: 9
                                })}
                            />
                            {errors.fullName?.type === "required" && (
                                <p className="text-message-form">Vui lòng nhập đầy đủ họ và tên!</p>
                            )}
                            {errors.fullName?.type === "minLength" && (
                                <p className="text-message-form">Vui lòng nhập tối thiểu 9 kí tự!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='position-relative'>
                            <input className='w-100 input-cart' type="text" placeholder="Số điện thoại"
                                {...register('phoneNumber', {
                                    required: true,
                                    minLength: 9
                                })}
                            />
                            {errors.phoneNumber?.type === "required" && (
                                <p className="text-message-form">Vui lòng nhập số điện thoại!</p>
                            )}
                            {errors.phoneNumber?.type === "minLength" && (
                                <p className="text-message-form">Vui lòng nhập đầy đủ số điện thoại!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='position-relative'>
                            <input className='w-100 input-cart' type="text" placeholder="Địa chỉ email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })} />
                            {errors.email?.type === "required" && (
                                <p className="text-message-form">Vui lòng nhập email của bạn!</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="text-message-form">Vui lòng nhập đúng email của bạn!</p>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='position-relative'>
                            <input className='w-100 input-cart' type="text" placeholder="Địa chỉ"
                                {...register('addres', {
                                    required: true,
                                    minLength: 12
                                })}
                            />
                            {errors.addres?.type === "required" && (
                                <p className="text-message-form">Vui lòng nhập địa chỉ của bạn!</p>
                            )}
                            {errors.addres?.type === "minLength" && (
                                <p className="text-message-form">Vui lòng nhập tối thiểu 12 kí tư!</p>
                            )}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='position-relative'>
                            <textarea className='w-100 input-cart mb-5' type="text" placeholder="Ghi chú"
                                {...register('note', {
                                    required: true,
                                    minLength: 12
                                })}
                            />
                            {errors.note?.type === "required" && (
                                <p className="text-message-form">Vui lòng nhập thông tin địa chỉ cụ thể của bạn!</p>
                            )}
                            {errors.note?.type === "minLength" && (
                                <p className="text-message-form">Vui lòng nhập tối thiểu 12 kí tự!</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className='nav px-3 navbar'>
                    <div className=''>
                        <button className='btn-dat'>Gửi đơn hàng</button>
                    </div>
                    <div className=''>
                        <button type='button' onClick={() => document.querySelector('.login-form-detail').style.display = "none"} className='btn-delete-carts'>Hủy</button>
                    </div>
                </div>
            </form>

        </div>
    )
}


function ChinhSach() {
    return (
        <div className='chinhsach'>
            <h6 >Chính sách bán hàng</h6>
            <ul className='ul-detail'>
                <li><i className="fa fa-check-circle"></i>Dùng thử 10 ngày miễn phí đổi máy. (Macbook like new)</li>
                <li><i className="fa fa-check-circle"></i> Lỗi 1 Đổi 1 trong 30 ngày đầu. (Macbook like new)</li>
                <li><i className="fa fa-check-circle"></i>Giao hàng tận nhà toàn quốc</li>
                <li><i className="fa fa-check-circle"></i>Thanh toán khi nhận hàng (nội thành)</li>
                <li><i className="fa fa-check-circle"></i> Hỗ trợ phần mềm trọn đời</li>
            </ul>
        </div>
    )
}