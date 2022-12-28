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
import DetailProduct from "../Pages/DetailProduct/DetailProduct.jsx"
import {MacAir,MacPro,MacM1, MacM2, Imac, ImacM1, ImacMini, ImacMiniM1, MacbookPro, MacStudio, AppleDisplay, Iphone14Series, Iphone13Series, Ipad102Inch, IpadAir, IpadPro, IpadMini, AppleWatchUltra, AppleWatchSeries8, AppleWatchSe, PhuKienMacBook, PhuKienIphone} from '../Pages/PageChildren1/index'
import {MacAir2016,MacAir2017,MacAir2018,MacAir2019,MacAir2020,MacAir2022} from '../Pages/PageChildren2/MacAir'
import {MacPro2018,MacPro2019,MacPro2020,MacPro2021,MacPro2022} from '../Pages/PageChildren2/MacPro'
import {MacProM1,MacProM2,MacAirM1,MacAirM2} from '../Pages/PageChildren2/MacProM1'
import { MacBook,ImacDesktop, Iphone, Ipad, AppleWhatch, PhuKien } from "../Pages/PageItem/index.jsx"
import { Imac2015, Imac2017, Imac2019, Imac2020, Imac2021 } from "../Pages/PageChildren2/Imac.jsx"
import { ImacMini2014, ImacMini2018, ImacMini2020 } from "../Pages/PageChildren2/ImacMini.jsx"
import Cart from "../Pages/Carts/Cart.jsx"
import { Iphone13, Iphone13Pro, Iphone13ProMax, Iphone14, Iphone14Plus, Iphone14Pro, Iphone14ProMax } from "../Pages/PageChildren2/Iphones.jsx"
import { BanDiChuot,BanPhim, BaoDaMacbook, BoDanMacbook, BoVeSinh, CapChuyenDoi, Chuot, DanIphone, OpIphone, OpMacbook, PhuKienTanNhiet, SacIphone } from "../Pages/PageChildren2/PhuKien.jsx"
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
    { path: '/iphone-14-series', component: Iphone14Series },
    { path: '/macbook-pro', component: MacbookPro },
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
    { path: '/mac-pro', component: MacPro },
    { path: '/mac-studio', component: MacStudio },
    { path: '/iphone', component: Iphone },
    { path: '/apple-displays', component: AppleDisplay },
    { path: '/iphone-14-pro-max', component: Iphone14ProMax },
    { path: '/iphone-14-pro', component: Iphone14Pro },
    { path: '/iphone-14-plus', component: Iphone14Plus },
    { path: '/iphone-14', component: Iphone14 },
    { path: '/iphone-13-series', component: Iphone13Series },
    { path: '/iphone-13-pro', component: Iphone13Pro },
    { path: '/iphone-13-pro-max', component: Iphone13ProMax },
    { path: '/iphone-13', component: Iphone13 },
    { path: '/ipad-10.2-inch', component: Ipad102Inch },
    { path: '/ipad-air', component: IpadAir },
    { path: '/ipad-pro', component: IpadPro },
    { path: '/ipad-mini', component: IpadMini },
    { path: '/ipad', component: Ipad },
    { path: '/phukien', component: PhuKien },
    { path: '/apple-watch-ultra', component: AppleWatchUltra },
    { path: '/apple-watch-series-8', component: AppleWatchSeries8 },
    { path: '/apple-watch-se', component: AppleWatchSe },
    { path: '/applewatch', component: AppleWhatch },
    { path: '/phukien-macbook', component: PhuKienMacBook },
    { path: '/ban-di-chuot', component: BanDiChuot },
    { path: '/ban-phim', component: BanPhim },
    { path: '/bao-da-macbook', component: BaoDaMacbook },
    { path: '/bo-dan-macbook', component: BoDanMacbook },
    { path: '/bo-ve-sinh', component: BoVeSinh },
    { path: '/cap-chuyen-doi', component: CapChuyenDoi },
    { path: '/chuot', component: Chuot },
    { path: '/op-macbook', component: OpMacbook },
    { path: '/phu-kien-tan-nhiet', component: PhuKienTanNhiet },
    { path: '/phu-kien-iphone', component: PhuKienIphone },
    { path: '/op-iphone', component: OpIphone },
    { path: '/dan-iphone', component: DanIphone },
    { path: '/sac-iphone', component: SacIphone },
]


export { publicRoutes }