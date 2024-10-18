import { ColorButton } from "../personaje/personaje-card/PersonajeCard";
import { InputForm, InputFormProps } from "./InputForm";

export interface FormProps {
    fields: InputFormProps[];
    isDisableButton: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export const Form = ({ onSubmit, fields, isDisableButton }: FormProps) => {

    return (

        <form className="flex flex-col border p-3 gap-2 w-[300px] rounded" onSubmit={onSubmit}>

            {
                fields.map(f => (
                    <InputForm
                        key={f.name}
                        isDisable={f.isDisable}
                        value={f.value || ''}
                        name={f.name}
                        onChangeInput={f.onChangeInput}
                    />
                ))
            }

            <button
                type='submit'
                disabled={isDisableButton}
                className={isDisableButton ? ColorButton.gray : ColorButton.orange}
            >
                {isDisableButton ? <span className="text-gray-400 font-bold break-keep">Primero elige un personaje para editar</span> : "Guardar cambios"}
            </button>

        </form>);
};