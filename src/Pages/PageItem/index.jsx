import PageItem from "../ProductsPage/PageItem";
function MacBook(){
    return(
        <PageItem category_id ={1} type ={0}  /> /* text_name = "M2" id_children1 = {1} id_children2={1} */
    )
}

function ImacDesktop(){
    return(
        <PageItem category_id={2} type={0} />
    )
}
function Iphone(){
    return(
        <PageItem category_id={3} type={0} menu />
    )
}
function Ipad(){
    return(
        <PageItem category_id={4} type={0} />
    )
}
function AppleWhatch(){
    return(
        <PageItem category_id={5} type={0} />
    )
}
function PhuKien(){
    return(
        <PageItem category_id={6} type={0} menu />
    )
}
export{MacBook,ImacDesktop,Iphone,Ipad,AppleWhatch,PhuKien}