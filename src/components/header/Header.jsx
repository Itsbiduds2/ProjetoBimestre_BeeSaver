import Logo from "../logo"
import style from "./header.module.css"

function Header() {
    return (
      <>
        <header className={style.header}>
          <Logo/>
          <h1 className={style.title}>BeeSaver</h1>
        </header>
      </>
    )
  }
  
  export default Header