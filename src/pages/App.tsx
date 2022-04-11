import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro/Index';
import Formulario from '../Formulario/Index';
import Lista from '../Lista/Index';
import style from './App.module.scss'


function App() {

  const [tarefas, setTarefas] = useState (
    [
    {tarefa:"JavaScript",
    tempo:"01:30:00"
},
    {tarefa:"React",
    tempo:"02:00:00"
},
    {tarefa:"Java",
    tempo:"1:50:00"
}
 ]
    )


  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
