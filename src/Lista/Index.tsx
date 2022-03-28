import React from "react";
import Item from "./item";
import style from './Lista.module.scss';


function Lista(){
    const tarefas = [{
        tarefa:"JavaScript",
        tempo:"01:30:00"
        },
        {
        tarefa:"React",
        tempo:"02:00:00"
        },
        {
        tarefa:"Java",
        tempo:"1:50:00"
        }
    ]



    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item,index)=>(
                    <Item
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>


        </aside>



    )




}

export default Lista