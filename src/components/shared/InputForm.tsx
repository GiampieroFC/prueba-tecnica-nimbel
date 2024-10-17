
export interface InputFormProps {
    isDisable: boolean;
    value?: string | number;
    name: string;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({ isDisable, value, onChangeInput, name }: InputFormProps) => {

    return (
        <label className='flex flex-row flex-nowrap items-center gap-1 capitalize' >
            {name}: <input
                disabled={isDisable}
                name={name}
                className='border px-2 rounded-md w-full bg-transparent capitalize'
                type="text"
                value={value}
                onChange={onChangeInput}
            />
        </label>
    );
};