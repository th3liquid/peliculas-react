import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = e => {
    // Crear estado y actualizarlo

    setBusqueda(e.target.value)


    

    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })

    

    // Comprobar si hay un resultado

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'))
      setNoEncontrado(true);

    }else {
      setNoEncontrado(false);
    }
 
    console.log(pelis_encontradas);
    

    // Actualizar el estado del listado principal con lo que filtro
    setListadoState(pelis_encontradas);
    
  }

  return (
    <>
        <div className="search">
          
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrado == true && busqueda.length > 1) && (
                  <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
                  
                )}

                <form>
                    <input name='busqueda' autoComplete='off' value={busqueda} placeholder='Buscar...' onChange={buscarPeli} type="text" id='search_field' />
                    <button id='search'>Buscar</button>
                </form>
        </div>
    </>
  )
}
