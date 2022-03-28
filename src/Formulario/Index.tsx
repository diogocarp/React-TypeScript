import React from "react";
import Botao from "../components/Botao/Index";
import style from './Form.module.scss'



class Formulario extends React.Component{

    render(){
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicione um estudo" required/>


                </div>

                <div className={style.inputContainer}>
                    <label>Determine o Tempo</label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="02:00:00" required/>


                </div>
                <Botao>
                Adicionar
                </Botao>
            </form>
            



        )


    }


 

}

export default Formulario