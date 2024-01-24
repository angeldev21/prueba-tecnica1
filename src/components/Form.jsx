import useForm from "../hooks/useForm";
import { useStoreForm } from "../store/store";
import { Button } from "./Button";
import { Input } from "./Input";
import { InputSelect } from "./InputSelect";

export function Form() {
  const setFormValues = useStoreForm(state => state.setFormValues)
  const setPhase = useStoreForm(state => state.setPhase)

  const [formValues, handleChange] = useForm({
    name: '',
    phone: '',
    state: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault()

    setFormValues(formValues)
    setPhase()
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-white mb-3">Envíanos tu dibujo</h1>
      <p className="text-white mb-8">Bienvenido al concurso del mejor dibujo, llena tus datos para participar.</p>
      <section className="flex flex-col gap-5">
        <div>
          <Input
            name="name"
            label="Nombre"
            type="text"
            placeholder='Tu nombre'
            change={handleChange}
          />
        </div>
        <div>
          <Input
            name="phone"
            label="Número de teléfono"
            type="number"
            placeholder="56..."
            change={handleChange}
          />
        </div>
        <div>
          <InputSelect change={handleChange} />
        </div>
      </section>
      <div className="flex justify-end mt-10">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  )
}
