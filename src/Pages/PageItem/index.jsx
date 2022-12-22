import PageItem from "../ProductsPage/PageItem";


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


export{MacBook,ImacDesktop}