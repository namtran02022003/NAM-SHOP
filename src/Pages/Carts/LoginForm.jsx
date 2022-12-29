
import { useForm } from 'react-hook-form'

function LoginFormCart({ datas, totalPrice }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const values = {
            dataUser: data,
            carts: datas,
            total: totalPrice
        }
        console.log(values)
    }
    return (
        <div className='form'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-8'>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className="col-4">
                                    <div className='position-relative'>
                                        <input className='w-100 input-cart' type="text" placeholder='Họ và tên'
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
                                <div className="col-4">
                                    <div className='position-relative'>
                                        <input className='w-100 input-cart' type="text" placeholder='Số điện thoại'
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
                                <div className="col-4">
                                    <div className="position-relative">
                                        <input className='w-100 input-cart' type="email" placeholder='Địa chỉ email'
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            })}
                                        />
                                        {errors.email?.type === "required" && (
                                            <p className="text-message-form">Vui lòng nhập email của bạn!</p>
                                        )}
                                        {errors.email?.type === "pattern" && (
                                            <p className="text-message-form">Vui lòng nhập đúng email của bạn!</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="position-relative">
                                        <textarea className='w-100 input-cart' placeholder='Địa chỉ'
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
                                <div className="col-4">
                                    <div className="position-relative">
                                        <textarea className='w-100  input-cart' placeholder='Ghi chú'
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
                                <div className="col-4">
                                    <button type='submit' className='btn-dat'>Gửi đơn hàng</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { LoginFormCart }