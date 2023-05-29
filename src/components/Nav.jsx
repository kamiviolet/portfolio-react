import ResponsiveMenuBtn from '../components/ResponsiveMenuBtn'
import MenuWrapper from '../components/MenuWrapper'
import {clickMenuItems} from '../utils/utils'
import '../css/nav.css'

export default function Nav() {
    return (
        <nav className="navbar" onClick={clickMenuItems}>
            <ResponsiveMenuBtn />
            <MenuWrapper />
        </nav>
      )
}