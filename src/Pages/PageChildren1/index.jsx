
import PageItem from "../ProductsPage/PageItem"
function MacAir() {
    return (
        <PageItem category_id={1} id_children1={1} type={1} />
    )
}
function MacbookPro() {
    return (
        <PageItem category_id={1} id_children1={2} type={1} />
    )
}
function MacM1() {
    return (
        <PageItem category_id={1} id_children1={3} type={'type'} text_name="M1" />
    )
}
function MacM2() {
    return (
        <PageItem category_id={1} id_children1={4} type={'type'} text_name="M2" />
    )
}
function Imac() {
    return (
        <PageItem category_id={2} id_children1={1} type={1} />
    )
}
function MacPro() {
    return (
        <PageItem category_id={2} id_children1={5} type={1} />
    )
}
function MacStudio() {
    return (
        <PageItem category_id={2} id_children1={6} type={1} />
    )
}

function ImacM1() {
    return (
        <PageItem category_id={2} id_children1={2} type={'type'} text_name="M1" />
    )
}
function ImacMini() {
    return (
        <PageItem category_id={2} id_children1={3} type={'type'} text_name="Mini" />
    )
}
function ImacMiniM1() {
    return (
        <PageItem category_id={2} id_children1={3} type={'type'} text_name="Mini" text_name2="M1" />
    )
}

function AppleDisplay() {
    return (
        <PageItem category_id={2} id_children1={7} type={1}  />
    )
}
function Iphone14Series() {
    return (
        <PageItem category_id={3} id_children1={1} type={1} menu />
    )
}
function Iphone13Series() {
    return (
        <PageItem category_id={3} id_children1={2} type={1} menu  />
    )
}

function Ipad102Inch() {
    return (
        <PageItem category_id={4} id_children1={1} type={1}  />
    )
}

function IpadAir() {
    return (
        <PageItem category_id={4} id_children1={2} type={1}  />
    )
}

function IpadPro() {
    return (
        <PageItem category_id={4} id_children1={3} type={1}  />
    )
}

function IpadMini() {
    return (
        <PageItem category_id={4} id_children1={4} type={1}  />
    )
}



function AppleWatchUltra() {
    return (
        <PageItem category_id={5} id_children1={1} type={1}  />
    )
}
function AppleWatchSeries8() {
    return (
        <PageItem category_id={5} id_children1={2} type={1}  />
    )
}
function AppleWatchSe() {
    return (
        <PageItem category_id={5} id_children1={3} type={1}  />
    )
}



function PhuKienMacBook() {
    return (
        <PageItem category_id={6} id_children1={1} type={1} />
    )
}
function PhuKienIphone() {
    return (
        <PageItem category_id={6} id_children1={2} type={1} />
    )
}
function PhuKienIpad() {
    return (
        <PageItem category_id={6} id_children1={3} type={1} />
    )
}
function PhuKienAppleKhac() {
    return (
        <PageItem category_id={6} id_children1={4} type={1} />
    )
}
function PhuKienKhac() {
    return (
        <PageItem category_id={6} id_children1={5} type={1} />
    )
}
export { PhuKienAppleKhac, PhuKienKhac, MacAir, PhuKienIphone, PhuKienIpad, MacbookPro, MacM1, MacM2, Imac, ImacM1, ImacMini, ImacMiniM1, MacPro, MacStudio, AppleDisplay, Iphone14Series, Iphone13Series, Ipad102Inch, IpadAir, IpadMini, IpadPro, AppleWatchSe, AppleWatchSeries8, AppleWatchUltra, PhuKienMacBook }