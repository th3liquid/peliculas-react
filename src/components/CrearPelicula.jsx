import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const CrearPelicula = ({setListadoState}) => {

    const [peliState, setPeliState] = useState({});

    const {titulo, descripcion} = peliState;

    const tituloComponente = 'Añadir Pelicula'

    const consefuirDatosForm = e => {
        e.preventDefault();

        // Conseguir datos del form

        let datosForm = e.target;
        let titulo = datosForm.titulo.value;
        let descripcion = datosForm.descripcion.value;

        // Crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar estado
        setPeliState(peli);

        // Actualizar el estado del estado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        })

        // Guardar en el localstorage
        GuardarEnStorage('pelis', peli);
        
        
        
        
    };
    


  return (
    <>
     <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                 {(titulo && descripcion) && `Has creado la pelicula: ` + titulo}

                <form onSubmit={consefuirDatosForm} action="">
                    <input 
                        name='titulo' 
                        type="text" 
                        placeholder="Titulo" />
                    <textarea 
                        name='descripcion' 
                        placeholder="Descripción" 
                        id=""  
                        cols="30" 
                        rows="10">

                        </textarea>
                    <input type="submit" placeholder='Enviar'/>
                </form>

     </div>
    </>
  )
}
