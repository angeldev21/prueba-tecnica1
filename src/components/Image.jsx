import { useRef } from "react"
import { useStoreForm } from "../store/store"
import { Button } from "./Button"

export const Image = () => {
  const fileInput = useRef()

  const setFormValues = useStoreForm(state => state.setFormValues)
  const setPhase = useStoreForm(state => state.setPhase)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (fileInput.current.files && fileInput.current.files[0]) {
      const lector = new FileReader();
      lector.onload = function (e) {
        setFormValues({
          image: e.target.result
        })
      };

      lector.readAsDataURL(fileInput.current.files[0]);

      setPhase()
    }
  }

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold text-white mb-3">Envíanos tu dibujo</h2>
      <p className="text-white mb-8">El segundo paso, es subir tu dibujo</p>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Imagen</label>
        <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="image" type="file" accept="image/*" ref={fileInput} />
      </div>
      <div className="flex justify-end mt-10">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  )
}