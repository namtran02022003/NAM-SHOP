var listProduct = [
    {
        thongso_all:'huy'
    }, 
    {
        thongso_all:'nam'
    },
    {
        thongso_all:'tung'
    }
]
var arr = ["f","tung","e"]
var newArr = []
for (let index = 0; index < listProduct.length; index++) {
    for (let i = 0; i < arr.length; i++) {
       var b =  listProduct[index].thongso_all.includes(arr[i]) 
        b ? newArr.push(listProduct[index]) :''
       }
   }
console.log(newArr)



