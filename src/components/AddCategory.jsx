import { useState } from "react"

export const AddCategory = ({onNewCategory /*onAddCategory*/}) => {

  const [inputValue, setinputValue] = useState('One Punch')

  const handleInputChange = ({target}) => {
    //setinputValue(e.target.value)
    setinputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newCategory = inputValue.trim();
    if( newCategory.length <=1 ) return
    //onAddCategory(  cat => [inputValue, ...cat] );//recibe funcion callback
    onNewCategory(newCategory)
    setinputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )

}
