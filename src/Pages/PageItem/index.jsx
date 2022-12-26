import PageItem from "../ProductsPage/PageItem";
import OtherPages from "../OtherPages/OtherPagesChildren1";

function MacBook(){
    return(
        <PageItem category_id ={1}/>
    )
}

function ImacDesktop(){
    return(
        <PageItem category_id={2} />
    )
}
function Iphone(){
    return(
        <OtherPages category_id={3} />
    )
}


export{MacBook,ImacDesktop,Iphone}