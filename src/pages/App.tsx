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

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
       />
      <Cronometro/>
    </div>
  );
}

export default App;
