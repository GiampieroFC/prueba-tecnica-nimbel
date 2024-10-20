import { Personaje } from "../../../data/getPersonajes";
import { FieldDataValue, FieldDataValueProps } from "./ui/FieldDataValue";

export enum ColorButton {
    red = "bg-red-600",
    orange = "bg-orange-600",
    green = "bg-green-600",
    blue = "bg-blue-600",
    yellow = "bg-yellow-600",
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

    const fields: FieldDataValueProps[] = [
        {
            name: "nombre",
            value: nombre,
        },
        {
            name: "raza",
            value: raza,
        },
        {
            name: "edad",
            value: edad + " años",
        },
        {
            name: "habilidad",
            value: habilidad,
        },
    ];

    return (
        <div className="flex flex-row border flex-wrap-reverse p-2 gap-2 box-border w-[300px] lg:w-[450px] justify-evenly rounded border-gray-800 items-center m-auto h-[450px] lg:h-72">

            <div className="flex justify-start w-4/5 flex-col lg:w-1/2">

                {
                    fields.map(f => <FieldDataValue key={f.name} {...f} />)
                }

                <div className="flex flex-nowrap gap-2 my-2">
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
                className="rounded-full h-44"
                width={175}
                alt={`${raza} ${nombre}`}
            />

        </div>
    );
};
