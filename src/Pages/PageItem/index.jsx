import PageItem from "../ProductsPage/PageItem";
import OtherPages from "../OtherPages/OtherPages";

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
function Ipad(){
    return(
        <PageItem category_id={4} />
    )
}
function AppleWhatch(){
    return(
        <PageItem category_id={5} />
    )
}
function PhuKien(){
    return(
        <OtherPages category_id={6} />
    )
}
export{MacBook,ImacDesktop,Iphone,Ipad,AppleWhatch,PhuKien}