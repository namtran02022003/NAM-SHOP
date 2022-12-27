
import Pages from "../Pages"
import PageChildren from "../ProductsPage/PageChildren"
import PageChildren1 from "../ProductsPage/PageChildren1"
import MacM from "../ProductsPage/MacM"
import OtherPagesChildren1 from "../OtherPages/OtherPagesChildren1"
function MacAir(){
    return(
        <PageChildren1 category_id={1} id_children1={1}/>
    )
}
function MacbookPro(){
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
function MacPro(){
    return(
        <PageChildren category_id={2} id_children1={5} />
    )
}
function MacStudio(){
    return(
        <PageChildren category_id={2} id_children1={6} />
    )
}

function ImacM1(){
    return(
        <Pages category_id={2} id_children1={2} thongso="M1" name=" " />
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

function AppleDisplay(){
    return(
        <PageChildren category_id={2} id_children1={7} />
    )
}
function Iphone14Series(){
    return(
        <OtherPagesChildren1 category_id={3} id_children1={1} />
    )
}
function Iphone13Series(){
    return(
        <OtherPagesChildren1 category_id={3} id_children1={2} />
    )
}

function Ipad102Inch(){
    return(
        <PageChildren category_id={4} id_children1={1} />
    )
}

function IpadAir(){
    return(
        <PageChildren category_id={4} id_children1={2} />
    )
}

function IpadPro(){
    return(
        <PageChildren category_id={4} id_children1={3} />
    )
}

function IpadMini(){
    return(
        <PageChildren category_id={4} id_children1={4} />
    )
}



function AppleWatchUltra(){
    return(
        <PageChildren category_id={5} id_children1={1} />
    )
}
function AppleWatchSeries8(){
    return(
        <PageChildren category_id={5} id_children1={2} />
    )
}
function AppleWatchSe(){
    return(
        <PageChildren category_id={5} id_children1={3} />
    )
}



function PhuKienMacBook(){
    return(
        <OtherPagesChildren1 category_id={6} id_children1={1} />
    )
}
export {MacAir,MacbookPro,MacM1,MacM2,Imac,ImacM1,ImacMini,ImacMiniM1,MacPro,MacStudio,AppleDisplay,Iphone14Series,Iphone13Series,Ipad102Inch,IpadAir,IpadMini,IpadPro,AppleWatchSe,AppleWatchSeries8,AppleWatchUltra,PhuKienMacBook}