export function tempoParaSegundos(tempo: string){
    
    const [horas, minutos, segundos] = tempo.split(':')

    const horaEmSegundos = Number(horas) * 3600

    const minutosEmSegundos = Number(minutos) * 60

    return horaEmSegundos + minutosEmSegundos +  Number(segundos)





}