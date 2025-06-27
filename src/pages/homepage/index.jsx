import Button from "../../components/Button"
import Header from "../../components/header/Header"
import style from "./homepage.module.css"

function Homepage() {
    return (
      <>      
      <Header/>
      <main className={style.main}>
        <h2 className={style.title}>Inicio</h2>
        <hr className={style.line}/>
        <div className={style.buttons}>
            <Button texto={"Abelhas"} tipo={"link"}/>
            <Button texto={"Jardim"} tipo={"link"}/>
            <Button texto={"Mapa"} tipo={"link"} />
        </div>

        <div className={style.videoContainer}>
          <iframe
            width="300"
            height="170"
            src="https://youtu.be/MKGS2khxGAw?si=3YTUa_hf1iCA5Nbq"
            title="BeeSaver: Facilitando Esforços Comunitários para o Crescimento da População de Abelhas🐝"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className={style.description}>
          Por que as abelhas são tão importantes para o nosso planeta? E por que devemos preservá-las?
          <br />
          Conheça o projeto inovador BeeSaver desenvolvido por alunos do Instituto Federal de Bragança Paulista
        </p>

      </main>
        
      </>
    )
  }
  
  export default Homepage