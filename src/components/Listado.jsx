import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    // const [listadoState, setListadoState] = useState([])

    const [editar, setEditar] = useState(0);
    

    const conseguirPeliculas = () => {
       let peliculas = JSON.parse(localStorage.getItem('pelis'));

       setListadoState(peliculas);

       return peliculas;

       
    }
    useEffect(() => {
        console.log('Componente de listado de peliculas cargado');
        conseguirPeliculas();
    
    
      
    }, [])
    

    const borrarPeli = (id) => {
        // Conseguir peliculas almacenadas
        let pelisGuardadas = conseguirPeliculas();


        // Filtrar esas peliculas para elimianr del array que no quiero

        let nuevoListadoPeliculas = pelisGuardadas.filter(peli => peli.id !== parseInt(id));

        

        // Actualizar estado del listado
        setListadoState(nuevoListadoPeliculas);

        // actualizar los datos en el localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevoListadoPeliculas));

    }



  return (
    <>
        {listadoState != null ?
           listadoState.map(peli => {
                return (

            <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit" onClick={()=> {
                    setEditar(peli.id)
                }} >Editar</button>
                <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                {/* aparece formulario para editar */}
                {editar === peli.id && (
                    <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>
                )}


            </article>
                );
            })
            : <h2>No hay peliculas para mostrar</h2>
        }
            
    </>
  )
}
