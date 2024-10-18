export interface FieldDataValueProps {
    name: string;
    value: string | number;
}

export const FieldDataValue = ({ name, value }: FieldDataValueProps) => {

    return (
        <p className="line-clamp-2" >
            <span className="text-sm p-0 text-gray-400 capitalize">{name}:</span>
            <span className="font-mono">{value}</span>
        </p>
    );
};