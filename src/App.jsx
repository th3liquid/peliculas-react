import { useState } from 'react'
import { Listado } from './components/Listado'
import { Buscador } from './components/Buscador'
import { CrearPelicula } from './components/CrearPelicula'

function App() {
  const [listadoState, setListadoState] = useState([]);
  

  return (
    
       <div className="layout">
        {/* cabecera del sitio */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>

        </header>
        {/* barra de navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li> 
            </ul>

        </nav>

        {/* Contenido principal */}

        <section className="content">

            {/* aqui van las peliculas */}

           <Listado listadoState={listadoState} setListadoState={setListadoState}  />
        </section>

        {/* Barra lateral */}

        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState} />

           <CrearPelicula setListadoState={setListadoState} />
        </aside>

        {/* Pie de Pagina */}
        <footer className="footer">
            &copy; Máster en ReactJS - <a href="https://kawwomkt.com">Kawwo Mkt</a>
        </footer>
    

    </div>
    
  )
}

export default App
