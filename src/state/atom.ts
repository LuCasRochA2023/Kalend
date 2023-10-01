import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/iFiltroDeEventos";
import { eventosAsync } from "../components/seletores/hooks";

export const ListaDeEventosStates= atom<IEvento[]>({
    key: 'ListaDeEventosStates',
    default: eventosAsync
})
export const filtroDeEventos=atom<IFiltroDeEventos>({
    key:"filtroDeEventos",
    default:{}
})