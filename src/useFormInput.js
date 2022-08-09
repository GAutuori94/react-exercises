import { useState } from "react";

export function useFormInput() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  })

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      }
    })
}

    return {
      data: data,
      onInput: handleInputChange,
    }
  }
