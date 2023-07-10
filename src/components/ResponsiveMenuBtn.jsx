import {turnBtnToCross} from '../utils/utils'

export default function ResponsiveMenuBtn() {
    return (
        <div className="menu_btn menu_btn_bar" onClick={turnBtnToCross}>
            <div className="bar menu_btn_bar bar_1"></div>
            <div className="bar menu_btn_bar bar_2"></div>
            <div className="bar menu_btn_bar bar_3"></div>
        </div>
    )
}