import style from "./Button.module.css"

function Button({texto, tipo}) {
    return (
      <>
        <button className={tipo=="link" ? style.link : style.publicar  }>
            {texto}
        </button>
      </>
    )
  }
  
  export default Button