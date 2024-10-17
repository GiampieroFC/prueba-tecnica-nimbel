import { Personaje } from "../../data/getPersonajes";

export enum ColorButton {
    red = "bg-red-500",
    orange = "bg-orange-500",
    green = "bg-green-500",
    blue = "bg-blue-500",
    yellow = "bg-yellow-500",
    gray = "bg-gray-300"
}

export interface Action {
    action: () => void;
    name: string;
    color?: ColorButton;
}

interface PersonajeCardProps {
    personaje: Personaje;
    actions?: Action[];
}

export const PersonajeCard = ({ personaje: { edad, habilidad, nombre, raza, img }, actions }: PersonajeCardProps) => {

    return (
        <div className="flex flex-row border flex-wrap-reverse p-2 gap-2 w-96 rounded">
            <div className="flex flex-col w-1/2">

                <p>
                    <span className="text-sm p-0 text-gray-400">Nombre:</span>
                    <span className="font-mono">{nombre}</span>
                </p>

                <p className="line-clamp-1">
                    <span className="text-sm p-0 text-gray-400">Raza:</span>
                    <span className="font-mono">{raza}</span>
                </p>

                <p className="line-clamp-1">
                    <span className="text-sm p-0 text-gray-400">Edad:</span>
                    <span className="font-mono">{edad}</span>
                </p>

                <p >
                    <span className="text-sm p-0 text-gray-400">Habilidad:</span>
                    <span className="font-mono">{habilidad}</span>
                </p>

                <div className="flex flex-wrap gap-2">
                    {
                        !!actions?.length
                        &&
                        actions.map(act => (
                            <button
                                key={crypto.randomUUID()}
                                className={act.color ? act.color : ColorButton.red}
                                onClick={act.action}
                            >
                                {act.name}
                            </button>
                        ))

                    }
                </div>
            </div>

            <img
                src={img}
                width={175}
                alt={`${raza} ${nombre}`}
            />

        </div>
    );
};
