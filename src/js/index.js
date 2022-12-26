import {useNavigate} from 'react-router-dom'




const listOption = [
    {
        heading: "CPU",
        content: [
            {
                value: "Tất cả bộ lọc"
            },
            {
                value: "Intel Core i3"
            },
            {
                value: "Intel Core i5"
            },
            {
                value: "Intel Core i7"
            },
            {
                value: "Intel Core i9"
            },
            {
                value: "Apple M1"
            },
            {
                value: "Apple M1 Pro"
            },
            {
                value: "Apple M1 Max"
            },
            {
                value: "Apple M1 Ultra"
            },
            {
                value: "Apple M2"
            }
        ]
    },
    {
        heading: "Kích thước màn hình",
        content: [
            {
                value: "13 inch"
            },
            {
                value: "14 inch"
            },
            {
                value: "15 inch"
            },
            {
                value: "16 inch"
            },
            {
                value: "21 inch"
            },
            {
                value: "24 inch"
            },
            {
                value: "27 inch"
            }
        ]
    },
    {
        heading: "Dung luọng RAM",
        content: [
            {
                value: "4 GB"
            },
            {
                value: "6 GB"
            },
            {
                value: "8 GB"
            },
            {
                value: "16 GB"
            },
            {
                value: "24 GB"
            },
            {
                value: "32 GB"
            },
            {
                value: "64 GB "
            },
            {
                value: "128 GB "
            }
        ]
    },
    {
        heading: "Dung lượng ổ cứng",
        content: [
            {
                value: "Tất cả bộ lọc"
            },
            {
                value: "128 GB"
            },
            {
                value: "256 GB"
            },
            {
                value: "512 GB"
            },
            {
                value: "1 TB"
            },
            {
                value: "2 TB"
            },
            {
                value: "4 TB "
            },
            {
                value: "8 TB "
            }
        ]
    },
    {
        heading: "Độ phân giải",
        content: [
            {
                value: "Tất cả bộ lọc"
            },
            {
                value: "HD"
            },
            {
                value: "2K"
            },
            {
                value: "4K"
            },
            {
                value: "5K"
            }
        ]
    },
    {
        heading: "Touchbar",
        content: [
            {
                value: "Tất cả bộ lọc"
            },
            {
                value: "co"
            },
            {
                value: "khong"
            }
        ]
    },
    {
        heading: "Công dụng",
        content: [
            {
                value: "Tất cả bộ lọc"
            },
            {
                value: "Văn phòng"
            },
            {
                value: "Đồ họa"
            },
            ,
            {
                value: "Phim ảnh"
            }
        ]
    }
]
const handlePrice = (value,setListProduct,listProductac,setStyleBtn)=>{
    setStyleBtn(value)
    if(value === 1){
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) < 10000000)
            setListProduct(newProducts)
    }else if(value === 2){
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product =>  Number(product.price) < 20000000 && Number(product.price) > 10000000)
            setListProduct(newProducts)
    }else if(value === 3){
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product =>  Number(product.price) > 20000000 && Number(product.price) < 30000000)
            setListProduct(newProducts)
    }else if(value === 4){
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product =>  Number(product.price) > 30000000 && Number(product.price) < 40000000)
            setListProduct(newProducts)
    }else if(value === 5){
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product =>   Number(product.price) > 40000000)
            setListProduct(newProducts)
    }else{
        setListProduct(listProductac)
    }
   }
   const ButtonOptions = [
    {
        name: "tất cả",
        value: 0
    },
    {
        name: "dưới 10 triệu",
        value: 1
    },
    {
        name: "10-20 triệu",
        value: 2
    },
    {
        name: "20-30 triệu",
        value: 3
    },
    {
        name: "30-40 triệu",
        value: 4
    },
    {
        name: "trên 40 triệu",
        value: 5
    }
]
function changePrice(value,setListProduct,listProductac,setStyleBtn) {
    setStyleBtn('')
    if (value === '1') {
        const productSort = listProductac.slice()
        productSort.sort((a, b) => (
            a.price - b.price
        ))
        setListProduct(productSort)
    } else if (value === '2') {
        const productSort = listProductac.slice()
        productSort.sort((a, b) => (
            b.price - a.price
        ))
        setListProduct(productSort)
    } else {
        setListProduct(listProductac)
    }
}


function changeNew(value,setListProduct,listProductac,setStyleBtn) {
    setStyleBtn('')
    if (value === '1') {
        const productSort = listProductac.slice()
     
        var newProducts = []
        productSort.filter(product => {
            var p = product.thongso.includes("NEW")  || product.product_name.includes('NEW')
            if (p) {
                newProducts.push(product)
            }
        })
        setListProduct(newProducts)
    } else if (value === '2') {
        const productSort = listProductac.slice()
        var newProducts = []
        productSort.filter(product => {
            var p = product.thongso.includes("Like New")|| product.product_name.includes('Like New')
            if (p) {
                newProducts.push(product)
            }
        })
        setListProduct(newProducts)
    } else {
        setListProduct(listProductac)
    }
}


const HandleCart = (product,dataCarts,check) => {
   const Navetage = useNavigate()
    const dataCart = dataCarts.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === product.id);
    if (index === -1) {
        cartCopy.push({ ...product, count: 1 });
    } else {
       Navetage('/cart')
    }
    localStorage.setItem('cart',JSON.stringify(cartCopy))
    dataCarts.setCarts(cartCopy)
}
const remove = (id,dataCarts)=>{
    const cartCopy = dataCarts.Carts.filter((item) => item.id !== id);
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    dataCarts.setCarts(cartCopy);
}


var index = 0
    function a(n) {
        var e = document.querySelectorAll('.my-slide')
        var length = e.length
       if(length > 3){
        if (n == 1) {
            e[index].style.display = "none"
            if (index == length - 4) {
                index = -1
                for (let i = 0; i < length; i++) {
                    e[i].style.display = "block"
                }
            }
            index++
        } else {
            index--
            if (index > 0) {
                e[index].style.display = "block"
                if (index == length - 4) {
                    index = -1
                    for (let i = 0; i < length; i++) {
                        e[i].style.display = "block"
                    }
                }
            } else {
                index = 0
                e[index].style.display = "block"
            }
        }
       }
    }
export {listOption, handlePrice,ButtonOptions,changePrice,changeNew,HandleCart,remove,a}