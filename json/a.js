var arr = [{name:'1'},{name:'0'},{name:'2'},{name:'3'},{name:'4'}]
var newarr = [8,9,6,'3',5,6]

var m = []
for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < newarr.length; i++) {
       var b =  arr[index].name.includes(newarr[i])
        b ? m.push(arr[index]) :''
       }
   }
   console.log(m)

        


