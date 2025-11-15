import style from "./button.module.css"

function Button({texto, tipo, endereco="#"}) {
    return (
      <>
        <button className={tipo === "link" ? style.link : tipo === "categoria" ? style.categoria : style.publicar}>
            <a href={endereco} target="_blank">{texto}</a>
        </button>
      </>
    )
  }
  
  export default Button