

import PropTypes from 'prop-types';

const Card = ({ title, author }) => {
return (
    <div className="card">
    <h2>Título: {title}</h2>
    <p>Autor: {author}</p>
    </div>
);
};

// Definimos los tipos de las props esperadas
Card.propTypes = {
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
};

export default Card;
