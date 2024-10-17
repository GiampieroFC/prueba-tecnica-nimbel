import { useState } from "react";
import { generarPersonaje, Personaje } from "../data/getPersonajes";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { saveInLocalStorage } from "../utils/saveInLocalStorage";

const LOCAL_STORAGE_ITEM_NAME = "personajes";

export const useManagePersonaje = () => {

    const [personajes, setPersonajes] = useState<Personaje[]>(getFromLocalStorage<Personaje[]>(LOCAL_STORAGE_ITEM_NAME) || []);


    const addPersonaje = async () => {
        const nuevoPersonaje = await generarPersonaje();
        setPersonajes(prev => {
            const nuevaListaPersonajes = [nuevoPersonaje, ...prev];
            saveInLocalStorage(LOCAL_STORAGE_ITEM_NAME, nuevaListaPersonajes);
            return nuevaListaPersonajes;
        });
    };

    const editPersonaje = (id: string, newData: Partial<Personaje>) => {
        const nuevaListaPersonajes = personajes.map(p => p.id === id ? { ...p, ...newData } : p);
        saveInLocalStorage(LOCAL_STORAGE_ITEM_NAME, nuevaListaPersonajes);
        setPersonajes(nuevaListaPersonajes);
    };

    const deletePersonaje = (id: string) => {
        const sinPersonaje = personajes.filter(p => p.id !== id);
        saveInLocalStorage(LOCAL_STORAGE_ITEM_NAME, sinPersonaje);
        setPersonajes(sinPersonaje);
    };

    return {
        personajes,
        addPersonaje,
        editPersonaje,
        deletePersonaje,
    };
};