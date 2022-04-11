import React from "react";
import Botao from "../components/Botao/Index";
import style from './Form.module.scss'



class Formulario extends React.Component{

    state = {
        tarefa:"",
        tempo:"00:00"

    }

    adicionarTarefa(evento:React.FormEvent){
        evento.preventDefault()
        console.log('estado: ', this.state)


    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input type="text" name="tarefa" id="tarefa" value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} placeholder="Adicione um estudo" required/>


                </div>

                <div className={style.inputContainer}>
                    <label>Determine o Tempo</label>
                    <input type="time" name="tempo" id="tempo" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})}  step="1" min="00:00:00" max="02:00:00" required/>


                </div>
                <Botao type="submit">
                Adicionar
                </Botao>
            </form>
            



        )


    }


 

}

export default Formulario