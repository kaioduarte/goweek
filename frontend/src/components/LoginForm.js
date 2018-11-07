import React from 'react'

export default ({ username, handleSubmit, handleInputChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      type='text'
      value={username}
      onChange={handleInputChange}
      placeholder='Nome de usuário'
    />
    <button type='submit'>Entrar</button>
  </form>
)
