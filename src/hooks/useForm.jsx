import { useState } from "react"

function useForm(values = {}) {
  const [formValues, setFormValues] = useState(values)

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return [formValues, handleChange]
}

export default useForm