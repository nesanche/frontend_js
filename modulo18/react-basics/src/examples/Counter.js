import React, { useState } from "react"

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const [messageError, setMessageError] = useState('')
  const addCount = () => {
    setMessageError('')
    if (count>= 20) {
      setMessageError('No se puede mas más')
    } else {
      setCount( count + 1 )
    }
  }
  const substractCount = () => {
    setMessageError('')
    if (count<= 0) {
      setMessageError('No se puede restar más')
    } else {
      setCount( count - 1 )
    }
  }
  return <div className="App">
    <h1>Counter</h1>
    <p><b>{ count }</b></p>
    <br /><br />
    <button onClick={addCount}>Sumar</button>
    <button onClick={substractCount}>Restar</button>
    <p> { messageError } </p>
  </div>
}

export default Counter