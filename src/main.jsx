import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './Contact'
import './index.css'
import './contact.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contact/>
  </React.StrictMode>,
)

/*EXPLICACIONES
Cuando creamos un componente, el const es con mayus. Es como una func. pero con mayus. Es para identificar a los componentes de React.
Devuelven un solo objeto que puede contener cosas adentro. En este caso el div.
El export default funciona para un solo componente.
<>
</>
Manera abreviada de escribir: "React.fragment"
*/