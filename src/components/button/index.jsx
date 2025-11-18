import { Link } from "react-router-dom";
import style from "./button.module.css";

function Button({texto, tipo, endereco="#"}) {
    return (
      <>
        <button className={
        tipo === "link"
          ? style.link
          : tipo === "categoria"
          ? style.categoria
          : style.publicar
      }
    >
      <Link to={endereco}>{texto}</Link>
        </button>
      </>
    )
  }
  
  export default Button