import { selector } from "recoil";
import { ListaDeEventosStates, filtroDeEventos } from "../../state/atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState=selector({
    key:"eventosFiltradosState",
    get:({get})=>{
        const filtro=get(filtroDeEventos)
        const todosOsEventos=get(ListaDeEventosStates)
    
    const eventos=todosOsEventos.filter(evento=>{
        if(!filtro.data){
          return true;
        }
        const ehOmesmoDia=filtro.data.toISOString().slice(0,10)===evento.inicio.toISOString().slice(0,10)
        return ehOmesmoDia
      })
      return eventos
    }
})
export const eventosAsync=selector({
  key:'eventosAsync',
  get:async()=>{
    const respostahttp=await fetch('http://localhost:8080/eventos')
    const eventosJson: IEvento[]=await respostahttp.json()
    return eventosJson.map(evento=>({
      ...evento,
      inicio:new Date(evento.inicio),
      fim:new Date(evento.fim)
    }))
  }
})