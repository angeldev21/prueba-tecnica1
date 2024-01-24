// eslint-disable-next-line react/prop-types
export const InputSelect = ({ change }) => {
  const options = ['CDMX', 'Estado de México', 'Puebla', 'Querétaro']

  return (
    <>
      <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona el estado de donde eres</label>
      <select name="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={change}>
        <option selected value="">Selecciona un estado</option>
        {
          options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>))
        }
      </select>
    </>
  )
}