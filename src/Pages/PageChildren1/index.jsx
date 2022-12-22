
import Pages from "../Pages"

import PageChildren1 from "../ProductsPage/PageChildren1"
import MacM from "../ProductsPage/MacM"

function MacAir(){
    return(
        <PageChildren1 category_id={1} id_children1={1}/>
    )
}
function MacPro(){
    return(
        <PageChildren1 category_id={1} id_children1={2}/>
    )
}
function MacM1(){
    return(
        <MacM category_id={1} id_children1={3} name="M1" />
    )
}
function MacM2(){
    return(
        <MacM category_id={1} id_children1={4} name="M2" />
    )
}
function Imac(){
    return(
        <PageChildren1 category_id={2} id_children1={1}/>
    )
}


function ImacM1(){
    return(
        <MacM category_id={2} id_children1={2} name="M1" />
    )
}
function ImacMini(){
    return(
        <MacM category_id={2} id_children1={3} name="Mini" />
    )
}
function ImacMiniM1(){
    return(
        <Pages id_children1={4} thongso="M1" name="Mini" category_id={2} />
    )
}




export {MacAir,MacPro,MacM1,MacM2,Imac,ImacM1,ImacMini,ImacMiniM1}