import React from 'react'

const Alerta = (alerta) => {
  return (
    <div className={`${alerta.error} ? 'from-red-400 to-red-600' `}>

    </div>
  )
}

export default Alerta