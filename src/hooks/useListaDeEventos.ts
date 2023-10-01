import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../components/seletores/hooks"

const useListaDeEventos=()=>{
    return useRecoilValue(eventosFiltradosState)
}
export default useListaDeEventos