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
    controlDelAgua = 'control del Agua',
    controlDelaTierra = 'control de la Tierra',
    controlDelViento = 'control del Viento',
    controlDelFuego = 'control del Fuego',
    curación = 'curación',
}

const nombres: string[] = [
    "Albert",
    "Aldric",
    "Arwen",
    "Drago",
    "Fenris",
    "Giampiero",
    "Korvash",
    "Lira",
    "Nyx",
    "Ragnar",
    "Rubén",
    "Selene",
    "Valeria",
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
    const edad = getRandomInt(1000);
    const nombre = `${getRandomValue(nombres)}_${new Date().getFullYear() - edad}`;
    const raza = getRandomValue(Razas);
    const img = `https://picsum.photos/seed/${nombre}/200`;

    const nuevoPersonaje: Personaje = {
        id,
        nombre,
        edad,
        raza,
        img,
        habilidad: getRandomValue(Habilidades),
    };

    return nuevoPersonaje;
};
