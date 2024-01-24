import { useStoreForm } from "../store/store"

export const Final = () => {
  const formValues = useStoreForm(state => state.formValues)
  const { name, phone, state, image } = formValues

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-white mb-3 text-center">Gracias por participar</h2>
      <p className="text-white mb-8 text-center">Tu información ha sido enviada</p>
      <article className="flex flex-col gap-3">
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nombre</dt>
            <dd className="text-lg font-semibold">{name}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Telefono</dt>
            <dd className="text-lg font-semibold">{phone}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Estado</dt>
            <dd className="text-lg font-semibold">{state}</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Tu dibujo</dt>
            <dd className="text-lg font-semibold">
              <img src={image} alt="tu dibujo" className="rounded-2xl mt-3" />
            </dd>
          </div>
        </dl>
      </article>
    </section>
  )
}