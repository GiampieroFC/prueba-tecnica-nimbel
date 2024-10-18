
import { useState } from 'react';
import { type Personaje } from './data/getPersonajes';
import { ColorButton, PersonajeCard } from './components/personaje/personaje-card/PersonajeCard';
import { Form, type FormProps } from './components/shared/Form';
import { useManagePersonaje } from './hooks/useManagePersonaje';
import { getById } from './utils/encontrarPersonaje';

function App() {

  const { personajes, addPersonaje, editPersonaje, deletePersonaje } = useManagePersonaje();

  const [form, setForm] = useState<Partial<Personaje>>();
  const [isDisable, setIsDisableForm] = useState<boolean>(true);

  const setToEdit = (id: string) => {
    const personaje = getById(id, personajes);
    if (!personaje) return;
    setForm(personaje);
    setIsDisableForm(false);
  };

  const onChangePersonajeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitPersonajeForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let idPersonaje = form?.id;
    if (!idPersonaje || !form) { setIsDisableForm(true); return; }
    editPersonaje(idPersonaje, form);
    setForm({});
    setIsDisableForm(true);
  };

  const deleteHandler = (id: string) => {
    setForm({});
    setIsDisableForm(true);
    deletePersonaje(id);
  };

  const formProps: FormProps = {
    isDisableButton: isDisable,
    onSubmit: onSubmitPersonajeForm,
    fields: [
      {
        isDisable: isDisable,
        value: form?.nombre || '',
        onChangeInput: onChangePersonajeInput,
        name: "nombre",
      },
      {
        isDisable: isDisable,
        value: form?.raza || '',
        onChangeInput: onChangePersonajeInput,
        name: "raza",
      },
      {
        isDisable: isDisable,
        value: form?.edad || '',
        onChangeInput: onChangePersonajeInput,
        name: "edad",
      },
      {
        isDisable: isDisable,
        value: form?.habilidad || '',
        onChangeInput: onChangePersonajeInput,
        name: "habilidad",
      },
    ]
  };

  return (
    <div className='flex flex-col gap-10 py-10 px-3 items-center'>

      <button className='bg-blue-500 p-3 w-[300px]' onClick={addPersonaje}>Genera un personaje</button>

      <Form {...formProps} />

      <div className='flex flex-row flex-wrap justify-center gap-4'>
        {
          !personajes.length
            ? <span className='tracking-widest font-light'>No hay personajes . . . </span>
            : personajes.map(p => (
              <PersonajeCard
                personaje={p}
                key={p.id}
                actions={
                  [
                    {
                      action: () => deleteHandler(p.id),
                      name: "Eliminar"
                    },
                    {
                      action: () => setToEdit(p.id),
                      name: "Editar",
                      color: ColorButton.yellow
                    },
                  ]
                }
              />))
        }
      </div>


    </div >
  );
}

export default App;
