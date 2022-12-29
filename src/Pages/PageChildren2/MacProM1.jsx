

import MacMchildren from "../ProductsPage/MacMchildren"

function MacProM1() {
    return (
        <MacMchildren category_id={1} id_children1={3} name="M1" name2="Pro" id_children2={2} />
    )
}
function MacProM2() {
    return (
        <MacMchildren category_id={1} id_children1={4} name="M2" name2="Pro" id_children2={2} />
    )
} function MacAirM1() {
    return (
        <MacMchildren category_id={1} id_children1={3} name="M1" name2="Air" id_children2={1} />
    )
}
function MacAirM2() {
    return (
        <MacMchildren category_id={1} id_children1={4} name="M2" name2="Air" id_children2={1} />
    )
}

export { MacProM1, MacProM2, MacAirM1, MacAirM2 }