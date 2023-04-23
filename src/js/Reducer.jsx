import { useReducer } from "react";

const CHANGE_PRICE = (payload) => {
  return {
    type: "changePrice",
    value: payload,
  };
};
const STATUS = (payload) => {
  return {
    type: "status",
    value: payload,
  };
};
const SORT = (payload) => {
  return {
    type: "sort",
    value: payload,
  };
};
const REMOVESTATE = {
  type: "removeState",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "changePrice":
      switch (action.value) {
        case 0:
          return {
            ...state,
            optionPrice: 0,
          };
        case 1:
          return {
            ...state,
            optionPrice: 1,
          };
        case 2:
          return {
            ...state,
            optionPrice: 2,
          };
        case 3:
          return {
            ...state,
            optionPrice: 3,
          };
        case 4:
          return {
            ...state,
            optionPrice: 4,
          };
        case 5:
          return {
            ...state,
            optionPrice: 5,
          };
      }
    case "status":
      return {
        ...state,
        status: action.value,
      };
    case "sort":
      return {
        ...state,
        sort: action.value,
      };
    case "textsearch":
      if (state.textSearch == action.value) {
        return {
          ...state,
          textSearch: "",
        };
      } else {
        return {
          ...state,
          textSearch: action.value,
        };
      }
    case "removeState":
      return {
        optionPrice: 0,
        status: 0,
        sort: 0,
        textSearch: "",
      };
    default:
      return state;
  }
};

function handleStateReducer(listProductac, setListProduct, stateReduce) {
  var a = listProductac.filter((pro) => {
    switch (stateReduce.optionPrice) {
      case 0:
        return pro;
      case 1:
        return pro.price <= 10000000;
      case 2:
        return pro.price > 10000000 && pro.price <= 20000000;
      case 3:
        return pro.price > 20000000 && pro.price <= 30000000;
      case 4:
        return pro.price > 30000000 && pro.price <= 40000000;
      case 5:
        return pro.price > 40000000;
    }
  });
  var newArr = a.filter((pro) => {
    if (stateReduce.status == 0) {
      return (
        pro.thongso_search.includes(stateReduce.textSearch) ||
        pro.thongso.includes(stateReduce.textSearch)
      );
    } else if (stateReduce.status == "NEW") {
      return (
        pro.thongso.includes("NEW") &&
        pro.thongso_search.includes(stateReduce.textSearch)
      );
    } else {
      return (
        pro.thongso.includes("Like New") &&
        pro.thongso_search.includes(stateReduce.textSearch)
      );
    }
  });
  if (stateReduce.sort == 0) {
    setListProduct(newArr);
  } else if (stateReduce.sort == 1) {
    let n = newArr.sort((a, b) => a.price - b.price);
    setListProduct(n);
  } else {
    let a = newArr.sort((a, b) => b.price - a.price);
    setListProduct(a);
  }
}

const ButtonOptions = [
  {
    name: "tất cả",
    value: 0,
  },
  {
    name: "dưới 10 triệu",
    value: 1,
  },
  {
    name: "10-20 triệu",
    value: 2,
  },
  {
    name: "20-30 triệu",
    value: 3,
  },
  {
    name: "30-40 triệu",
    value: 4,
  },
  {
    name: "trên 40 triệu",
    value: 5,
  },
];
export {
  reducer,
  handleStateReducer,
  CHANGE_PRICE,
  SORT,
  STATUS,
  REMOVESTATE,
  ButtonOptions,
};
