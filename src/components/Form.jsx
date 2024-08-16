import { useState } from 'react';
import Card from './Card';

const Form = () => {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [showCard, setShowCard] = useState(false);
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el primer input tiene menos de 3 caracteres o empieza con un espacio
    if (title.trim().length < 3) {
    setError('El título debe tener al menos 3 caracteres.');
    setShowCard(false);
    return;
    }

    if (title !== title.trim()) {
    setError('El título no debe contener espacios en blanco al inicio.');
    setShowCard(false);
    return;
    }

    // Verificar si el segundo input tiene menos de 6 caracteres
    if (author.length < 6) {
    setError('El autor debe tener al menos 6 caracteres.');
    setShowCard(false);
    return;
    }

    setError('');
    setShowCard(true);
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Título del Libro: </label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div>
        <label>Autor del Libro: </label>
        <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
    </div>
    <button type="submit">Enviar</button>
    {error && <p>{error}</p>}
    {showCard && <Card title={title} author={author} />}
    </form>
);
};

export default Form;
