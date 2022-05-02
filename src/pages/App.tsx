import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro/Index';
import Formulario from '../Formulario/Index';
import Lista from '../Lista/Index';
import { ITarefas } from '../types/Tarefas';
import style from './App.module.scss'


function App() {

  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();


  function selecionaTarefa (tarefaSelecionada: ITarefas){
  setSelecionado(tarefaSelecionada);
  setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
  ...tarefa,
  selecionado: tarefa.id === tarefaSelecionada.id ? true : false

  })))



  }


  function finalizarTarefa(){

    if(selecionado){

      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {

        if(tarefa.id == selecionado.id){

          return{...tarefa, selecionado:false, completado:true}
        }

        return tarefa;

      }))
    }

  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
       />
      <Cronometro
       selecionado={selecionado}
       finalizarTarefas={finalizarTarefa}
      />

    </div>
  );
}

export default App;
