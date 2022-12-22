import SlideHome from "./SlideHome"
import MenuLeftHome from "./MenuLeft"
import './Home.css'
import SdideProduct from "./SlideProduct"
import ContenHome from "../../Components/ContentHome/ContentHome"

export default function Home() {




    return (
        <div className="container px-5 my-2">
            <div className="row">
                <div className="col-2 p-0" style={{
                    width: "20%"
                }}>
                    <MenuLeftHome />
                </div>
                <div className="col-10 p-0" style={{
                    width: "80%"
                }}>
                    <SlideHome />
                </div>

            </div>
            <SdideProduct />

            <ContenHome children1_id={1} category_id={1} />
            <ContenHome children1_id={2} category_id={1} />
            <ContenHome children1_id={1} category_id={2} />
            <ContenHome children1_id={1} category_id={3} />


        </div>
    )
}