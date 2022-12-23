import GioiThieu from "../Pages/FooterOtherPages/GioiThieu.jsx"
import Home from "../Pages/Home/Home"
import Notfound from "../Pages/Notfound/Notfound.jsx"
import FooterLayout from "../Components/Layout/FooterOtherLayout.jsx"
import HuongDan from "../Pages/FooterOtherPages/HuongDan.jsx"
import LienHe from "../Pages/FooterOtherPages/LienHe.jsx"
import BaoHanh from "../Pages/FooterOtherPages/BaoHanhVaDoiTra.jsx"
import ChinhSachDatHang from "../Pages/FooterOtherPages/ChinhSachDatHang.jsx"
import VanChuyen from "../Pages/FooterOtherPages/ChinhSachVanChuyen.jsx"
import BaoMat from "../Pages/FooterOtherPages/BaoMat.jsx"
import ThanhToan from "../Pages/FooterOtherPages/ChinhSachThanhToan.jsx"
import IphonePage from "../Pages/IphonePage/IphonePage.jsx"
import DetailProduct from "../Pages/DetailProduct/DetailProduct.jsx"
import {MacAir,MacPro,MacM1, MacM2, Imac, ImacM1, ImacMini, ImacMiniM1} from '../Pages/PageChildren1/index'
import {MacAir2016,MacAir2017,MacAir2018,MacAir2019,MacAir2020,MacAir2022} from '../Pages/PageChildren2/MacAir'
import {MacPro2018,MacPro2019,MacPro2020,MacPro2021,MacPro2022} from '../Pages/PageChildren2/MacPro'
import {MacProM1,MacProM2,MacAirM1,MacAirM2} from '../Pages/PageChildren2/MacProM1'
import { MacBook,ImacDesktop } from "../Pages/PageItem/index.jsx"
import { Imac2015, Imac2017, Imac2019, Imac2020, Imac2021 } from "../Pages/PageChildren2/Imac.jsx"
import { ImacMini2014, ImacMini2018, ImacMini2020 } from "../Pages/PageChildren2/ImacMini.jsx"
import Cart from "../Pages/Carts/Cart.jsx"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioithieu', component: GioiThieu, layout: FooterLayout },
    { path: '*', component: Notfound, layout: null },
    { path: '/huong-dan-mua-hang', component: HuongDan, layout: FooterLayout },
    { path: '/lien-he', component: LienHe, layout: FooterLayout },
    { path: '/chinh-sach-bao-hanh-&-hoan-tra', component: BaoHanh, layout: FooterLayout },
    { path: '/chinh-sach-dat-hang', component: ChinhSachDatHang, layout: FooterLayout },
    { path: '/chinh-sach-van-chuyen', component: VanChuyen, layout: FooterLayout },
    { path: '/chinh-sach-bao-mat-thong-tin', component: BaoMat, layout: FooterLayout },
    { path: '/chinh-sach-thanh-toan', component: ThanhToan, layout: FooterLayout },
    { path: '/macbook-air', component: MacAir },
    { path: '/iphone-14-series', component: IphonePage },
    { path: '/macbook-pro', component: MacPro },
    { path: '/macbook-Air-2022', component: MacAir2022 },
    { path: '/macbook-Air-2020', component: MacAir2020 },
    { path: '/macbook-Air-2019', component: MacAir2019 },
    { path: '/macbook-Air-2018', component: MacAir2018 },
    { path: '/macbook-Air-2017', component: MacAir2017 },
    { path: '/macbook-Air-2016', component: MacAir2016 },
    { path: '/macbook-Pro-2022', component: MacPro2022 },
    { path: '/macbook-Pro-2021', component: MacPro2021 },
    { path: '/macbook-Pro-2020', component: MacPro2020 },
    { path: '/macbook-Pro-2019', component: MacPro2019 },
    { path: '/macbook-Pro-2018', component: MacPro2018 },
    { path: '/macbook-M1', component: MacM1 },
    { path: '/macbook-M2', component: MacM2 },
    { path: '/macbook-Pro-M1', component: MacProM1 },
    { path: '/macbook-Pro-M2', component: MacProM2 },
    { path: '/macbook-Air-M2', component: MacAirM2 },
    { path: '/macbook-Air-M1', component: MacAirM1 },
    { path: '/macbook', component: MacBook },
    { path: '/imac-mac-desktop', component: ImacDesktop },
    { path: '/imac', component: Imac },
    { path: '/imac-2021', component: Imac2021 },
    { path: '/imac-2020', component: Imac2020 },
    { path: '/imac-2019', component: Imac2019 },
    { path: '/imac-2017', component: Imac2017 },
    { path: '/imac-2015', component: Imac2015 },
    { path: '/imac-M1', component: ImacM1 },
    { path: '/imac-Mini', component: ImacMini },
    { path: '/imac-Mini-M1', component: ImacMiniM1 },
    { path: '/imac-Mini-2020', component: ImacMini2020 },
    { path: '/imac-Mini-2018', component: ImacMini2018 },
    { path: '/imac-Mini-2014', component: ImacMini2014 },
    { path: '/detail-product/:id', component: DetailProduct },
    { path: '/cart', component: Cart },

]


export { publicRoutes }