import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { ListaDeEventosStates } from "../state/atom"
import { obterId } from "../ultil"

const useAdicionarEvento=()=>{
    
        const setListaDeEventos=useSetRecoilState<IEvento[]>(ListaDeEventosStates)
        return(evento:IEvento)=>{
            const hoje=new Date()
            if (evento.inicio<hoje){
                throw new Error("Eventos não podem ser cadastrados com data menor que a atual")
            }
            evento.id =obterId()
            return setListaDeEventos(listaAntiga=>[...listaAntiga,evento])
        }
    
}
export default useAdicionarEvento