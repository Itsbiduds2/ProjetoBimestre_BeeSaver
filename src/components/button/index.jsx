import style from "./Button.module.css"

function Button({texto, tipo}) {
    return (
      <>
        <button
          className={tipo === "link" ? style.link : tipo === "categoria" ? style.categoria : style.publicar}
        >
            {texto}
        </button>
      </>
    )
  }
  
  export default Button