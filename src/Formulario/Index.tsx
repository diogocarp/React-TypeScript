import React from "react";
import Botao from "../components/Botao/Index";



class Formulario extends React.Component{

    render(){
        return(
            <form>
                <div>
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicione um estudo" required/>


                </div>

                <div>
                    <label>Determine o Tempo</label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="02:00:00" required/>


                </div>
                <Botao/>
            </form>
            



        )


    }


 

}

export default Formulario