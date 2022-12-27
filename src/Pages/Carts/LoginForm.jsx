
import { useForm } from 'react-hook-form'

function LoginFormCart() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
       
         <div className='form'>
         <div className='row'>
             <div className='col-4'></div>
             <div className='col-8'>
             <div className="">
            <form>
                <div className='row'>
                    <div className="col-4">
                        <input className='w-100 input-cart' type="text"  placeholder='Họ và tên' />
                    </div>
                    <div className="col-4">
                    <input className='w-100 input-cart' type="text" placeholder='Số điện thoại' />
                    </div>
                    <div className="col-4">
                    <input className='w-100 input-cart' type="email" placeholder='Địa chỉ email' />
                    </div>
                       
                    <div className="col-4">
                        <textarea className='w-100 input-cart' placeholder='Địa chỉ' />
                    </div>
                    <div className="col-4">
                    <textarea className='w-100 input-cart' placeholder='Ghi chú' />
                    </div>
                    <div className="col-4">
                        <button type='button' className='btn-dat'>Gửi đơn hàng</button>
                    </div>
                </div>
            </form>
        </div>
             </div>
         </div>
     </div>
    )
}
export {LoginFormCart}