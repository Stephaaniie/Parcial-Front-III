/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = (props) => {

    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');

    const [mensajeError, setMensajeError] = useState('');

    const esHexadecimal = (numeroHexadecimal) => {
        return /^[0-9A-F]+$/gi.test(numeroHexadecimal);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombre.trim() === '' || color.trim() === '' || esHexadecimal(color)) {
            setMensajeError('Por favor chequear que la informacion sea correcta.')
        } else {
            props.onSubmit({ nombre, color })
            setNombre('')
            setColor('')
            setMensajeError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type='text'
                        value={nombre}
                        placeholder="Ingresa tu nombre"
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    <input
                        type='text'
                        value={color}
                        placeholder="Ingresa tu color favorito (Formato HEX)."
                        onChange={(event) => setColor(event.target.value)}
                    />
                </label>
                <br />
                <button type='submit'>Enviar</button>
            </form>
            {mensajeError && <p>{mensajeError}</p>}
        </div>
    )
}

export default Form
