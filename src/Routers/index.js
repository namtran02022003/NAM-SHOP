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
import MacPro from "../Pages/PageItems/MacPro.jsx"
import IphonePage from "../Pages/IphonePage/IphonePage.jsx"
import MacAir from "../Pages/PageItems/MacAir.jsx"
import MacAir2022 from "../Pages/PageChildren2/MacAir2022.jsx"
import MacAir2020 from "../Pages/PageChildren2/MacAir2022.jsx"
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
]


export { publicRoutes }