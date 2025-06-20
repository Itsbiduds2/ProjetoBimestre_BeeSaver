import beeLogo from "../../assets/bee-logo.png";
import style from "./logo.module.css";

function Logo() {
  return (
    <img src={beeLogo} alt="Logo BeeSaver" className={style.logo} />
  );
}

export default Logo;
