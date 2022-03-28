import React from 'react';
import Formulario from '../Formulario/Index';
import Lista from '../Lista/Index';
import style from './App.module.scss'


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista/>

    </div>
  );
}

export default App;
