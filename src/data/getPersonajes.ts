import { capitalizeString } from "../utils/capitalizeString";
import { getRandomInt } from "../utils/getRandomInt";
import { getRandomValue } from "../utils/getRandomValue";

enum Razas {
    humano = 'humano',
    elfo = 'elfo',
    enano = 'enano',
    orco = 'orco',
    vampiro = 'vampiro',
    unicornio = 'unicornio',
}

enum Habilidades {
    volar = 'volar',
    invisibilidad = 'invisibilidad',
    superfuerza = 'superfuerza',
    telepatía = 'telepatía',
    controlDelAgua = 'control del agua',
    controlDelaTierra = 'control de la tierra',
    controlDelViento = 'control del viento',
    controlDelFuego = 'control del fuego',
    curación = 'curación',
}

const nombres: string[] = [
    "albert",
    "aldric",
    "arwen",
    "drago",
    "fenris",
    "giampiero",
    "korvash",
    "lira",
    "nyx",
    "ragnar",
    "rubén",
    "selene",
    "valeria",
];

export interface Personaje {
    id: string;
    nombre: string;
    edad: number;
    raza: Razas;
    img?: string;
    habilidad: Habilidades;
}


export const generarPersonaje = async (): Promise<Personaje> => {

    const id = crypto.randomUUID();
    const edad = getRandomInt(777);
    const nombre = `${capitalizeString(getRandomValue(nombres))}_${new Date().getFullYear() - edad}`;
    const raza = capitalizeString(getRandomValue(Razas)) as Razas;
    const img = `https://picsum.photos/seed/${id}/200`;

    const nuevoPersonaje: Personaje = {
        id,
        nombre,
        edad,
        raza,
        img,
        habilidad: capitalizeString(getRandomValue(Habilidades)) as Habilidades,
    };

    return nuevoPersonaje;
};
