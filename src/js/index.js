import { useNavigate } from 'react-router-dom'

const listOption = [
    {
        heading: "CPU",
        content: [
            {
                name: "Intel Core i3",
                value: "Intel Core i3"
            },
            {
                name: "Intel Core i5",
                value: "Intel Core i5"
            },
            {
                name: "Intel Core i7",
                value: "Intel Core i7"
            },
            {
                name: "Intel Core i9",
                value: "Intel Core i9"
            },
            {
                name: "Apple M1",
                value: "Apple M1"
            },
            {
                name: "Apple M1 Pro",
                value: "Apple M1 Pro"
            },
            {
                name: "Apple M1 Max",
                value: "Apple M1 Max"
            },
            {
                name: "Apple M1 Ultra",
                value: "Apple M1 Ultra"
            },
            {
                name: "Apple M2",
                value: "Apple M2"
            }
        ]
    },
    {
        heading: "Kích thước màn hình",
        content: [
            {
                name: "13 inch",
                value: "13 inch"
            },
            {
                name: "14 inch",
                value: "14 inch"
            },
            {
                name: "15 inch",
                value: "15 inch"
            },
            {
                name: "16 inch",
                value: "16 inch"
            },
            {
                name: "21 inch",
                value: "21 inch"
            },
            {
                name: "24 inch",
                value: "24 inch"
            },
            {
                name: "27 inch",
                value: "27 inch"
            }
        ]
    },
    {
        heading: "Dung luọng RAM",
        content: [
            {
                name: "  4GB",
                value: " RAM 4GB"
            },
            {
                name: "  8GB",
                value: " RAM 8GB"
            },
            {
                name: "  16GB",
                value: " RAM 16GB"
            },
            {
                name: "  24GB",
                value: " RAM 24GB"
            },
            {
                name: "  32GB",
                value: " RAM 32GB"
            },
            {
                name: "  64GB",
                value: " RAM 64GB"
            },
            {
                name: "  128GB ",
                value: " RAM 128GB "
            }
        ]
    },
    {
        heading: "Dung lượng ổ cứng",
        content: [
            {
                name: " 128 GB",
                value: "OC 128 GB"
            },
            {
                name: " 256 GB",
                value: "OC 256 GB"
            },
            {
                name: " 512 GB",
                value: "OC 512 GB"
            },
            {
                name: " 1 TB",
                value: "OC 1 TB"
            },
            {
                name: " 2 TB",
                value: "OC 2 TB"
            },
            {
                name: " 4 TB ",
                value: "OC 4 TB "
            },
            {
                name: " 8 TB ",
                value: "OC 8 TB "
            }
        ]
    },
    {
        heading: "Độ phân giải",
        content: [

            {
                name: "HD",
                value: "HD"
            },
            {
                name: "2K",
                value: "2K"
            },
            {
                name: "4K",
                value: "4K"
            },
            {
                name: "5K",
                value: "5K"
            }
        ]
    },

    {
        heading: "Công dụng",
        content: [
            {
                name: "van phong",
                value: "van phong"
            },
            {
                name: "do hoa",
                value: "do hoa"
            },
            ,
            {
                name: "phim anh",
                value: "phim anh"
            }
        ]
    }
]
const handlePrice = (value, setListProduct, listProductac, setStyleBtn,listProduct) => {
    setStyleBtn(value)
    if (value === 1) {
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) < 10000000)
        setListProduct(newProducts)
    } else if (value === 2) {
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) < 20000000 && Number(product.price) > 10000000)
        setListProduct(newProducts)
    } else if (value === 3) {
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) > 20000000 && Number(product.price) < 30000000)
        setListProduct(newProducts)
    } else if (value === 4) {
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) > 30000000 && Number(product.price) < 40000000)
        setListProduct(newProducts)
    } else if (value === 5) {
        const productSort = listProductac.slice()
        var newProducts = productSort.filter(product => Number(product.price) > 40000000)
        setListProduct(newProducts)
    } else {
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
function changePrice(value, setListProduct, listProductac, setStyleBtn) {
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


function changeNew(value, setListProduct, listProductac, setStyleBtn) {
    setStyleBtn('')
    if (value === '1') {
        const productSort = listProductac.slice()

        var newProducts = []
        productSort.filter(product => {
            var p = product.thongso.includes("NEW") || product.product_name.includes('NEW')
            if (p) {
                newProducts.push(product)
            }
        })
        setListProduct(newProducts)
    } else if (value === '2') {
        const productSort = listProductac.slice()
        var newProducts = []
        productSort.filter(product => {
            var p = product.thongso.includes("Like New") || product.product_name.includes('Like New')
            if (p) {
                newProducts.push(product)
            }
        })
        setListProduct(newProducts)
    } else {
        setListProduct(listProductac)
    }
}


// const HandleCart = (product,dataCarts,check) => {
//    const Navetage = useNavigate()
//     const dataCart = dataCarts.Carts
//     const cartCopy = dataCart.slice();
//     const index = cartCopy.findIndex((datas) => datas.id === product.id);
//     if (index === -1) {
//         cartCopy.push({ ...product, count: 1 });
//     } else {
//        Navetage('/cart')
//     }
//     localStorage.setItem('cart',JSON.stringify(cartCopy))
//     dataCarts.setCarts(cartCopy)
// }
const remove = (id, dataCarts) => {
    const cartCopy = dataCarts.Carts.filter((item) => item.id !== id);
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    dataCarts.setCarts(cartCopy);
}
var index = 0
function SlideItemProduct(n) {
    var e = document.querySelectorAll('.my-slide')
    var length = e.length
    if (length > 3) {
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
const handleChangeCheck = (id, data) => {
    const dataCart = data.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === id);
    const pr = cartCopy[index]
    if (pr.check) {
        pr.check = false
    } else {
        pr.check = true
    }
    cartCopy[index] = {
        ...pr
    }
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    data.setCarts(cartCopy);
}
const handleCount = (id, data, payload) => {
    const dataCart = data.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === id);
    const pr = cartCopy[index]
    cartCopy[index] = {
        ...pr, count: payload
    }
    localStorage.setItem(`cart`, JSON.stringify(cartCopy));
    data.setCarts(cartCopy);
}
const HandleCart = (product, dataCarts, check,router) => {
    const dataCart = dataCarts.Carts
    const cartCopy = dataCart.slice();
    const index = cartCopy.findIndex((datas) => datas.id === product.id);
    if (index === -1) {
        cartCopy.push({ ...product, count: 1, check: check })
    } else {
        router('/cart') 
    }
    localStorage.setItem('cart', JSON.stringify(cartCopy))
    dataCarts.setCarts(cartCopy)
   router('/cart')
}
export { listOption,HandleCart, handlePrice, ButtonOptions, changePrice, changeNew, remove, SlideItemProduct, handleCount, handleChangeCheck }