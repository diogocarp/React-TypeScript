import Botao from "../Botao/Index";
import { Relogio } from "./Relogio/Index";
import style from './Cronometro.module.scss'

export function Cronometro(){
    return (

        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronometro:</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Iniciar!
            </Botao>

        </div>

    )



}