import { useReducer } from 'react'




const CHANGE_PRICE = (payload) => {
    return {
        type: 'changePrice',
        value: payload
    }
}
const STATUS = (payload) => {
    return {
        type: 'status',
        value: payload
    }
}
const SORT = (payload) => {
    return {
        type: 'sort',
        value: payload
    }
}
const REMOVESTATE = {
    type: 'removeState'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'changePrice':
            switch (action.value) {
                case 0:
                    return {
                        ...state,
                        optionPrice: 0
                    }
                case 1:
                    return {
                        ...state,
                        optionPrice: 1
                    }
                case 2:
                    return {
                        ...state,
                        optionPrice: 2
                    }
                case 3:
                    return {
                        ...state,
                        optionPrice: 3
                    }
                case 4:
                    return {
                        ...state,
                        optionPrice: 4
                    }
                case 5:
                    return {
                        ...state,
                        optionPrice: 5
                    }
            }
        case 'status':
            return {
                ...state,
                status: action.value
            }
        case 'sort':
            return {
                ...state,
                sort: action.value
            }
        case 'textsearch':
            if (state.textSearch == action.value) {
                return {
                    ...state,
                    textSearch: ''
                }
            } else {
                return {
                    ...state,
                    textSearch: action.value
                }
            }
        case 'removeState':
            return {
                optionPrice: 0,
                status: 0,
                sort: 0,
                textSearch: '',
            }
        default: return state

    }
}

function handleStateReducer(listProductac, setListProduct, stateReduce) {
    var a = listProductac.filter(pro => {
        switch (stateReduce.optionPrice) {
            case 0:
                return pro
            case 1:
                return pro.price <= 10000000
            case 2:
                return pro.price > 10000000 && pro.price <= 20000000
            case 3:
                return pro.price > 20000000 && pro.price <= 30000000
            case 4:
                return pro.price > 30000000 && pro.price <= 40000000
            case 5:
                return pro.price > 40000000
        }
    })
    var newArr = a.filter(pro => {
        if (stateReduce.status == 0) {
            return pro.thongso_search.includes(stateReduce.textSearch) || pro.thongso.includes(stateReduce.textSearch)
        } else if (stateReduce.status == 'NEW') {
            return pro.thongso.includes('NEW') && pro.thongso_search.includes(stateReduce.textSearch)
        } else {
            return pro.thongso.includes('Like New') && pro.thongso_search.includes(stateReduce.textSearch)
        }
    })
    if (stateReduce.sort == 0) {
        setListProduct(newArr)
    } else if (stateReduce.sort == 1) {
        let n = newArr.sort((a, b) => a.price - b.price)
        setListProduct(n)
    } else {
        let a = newArr.sort((a, b) => b.price - a.price)
        setListProduct(a)
    }
}

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
export { reducer, handleStateReducer, CHANGE_PRICE, SORT, STATUS, REMOVESTATE, ButtonOptions }