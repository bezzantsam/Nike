import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'

const Nav = () => {
  return (
    <header>
        <nav>
            <a href="/"/>
            <img
            src = {headerLogo}
        />
        <img src ={hamburger}/>
            </nav>
    </header>
  )
}

export default Nav;