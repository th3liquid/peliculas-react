import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = 'Editar pelicula';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        

        // Conseguir target del evento

        let target = e.target;

        console.log(target);
        // Buscar el indice del objeto de la pelicula a actualizar

        const pelis_almacenadas = conseguirPeliculas();

        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese indice

        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        // Atualizar el elemento con el indice
        pelis_almacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array en el localstorage

        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        // Actualizar estados

        setListadoState(pelis_almacenadas);
        setEditar(0);

        


    }

  return (
    <>
        <div className='edit_form'>
        <h1 className='title'>{titulo_componente}: {peli.titulo}</h1>

        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input name='titulo' className='titulo_editado' defaultValue={peli.titulo} type="text" placeholder='Titulo' />
            <textarea name="descripcion" className='descripcion_editada' defaultValue={peli.descripcion} id="" cols="30" rows="10"></textarea>
            <input className='editar' value='Actualizar' type="submit" placeholder='Editar' />
        </form>

        </div>
    </>
  )
}
