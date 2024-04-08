import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, selectMovie }) => {
    // Proporciona valores predeterminados para evitar errores si `movie` es undefined
    const { name = 'No Title', image = '', synopsis = '' } = movie || {};

    // Verifica si `synopsis` está definido y calcula `isLong`
    const isLong = synopsis.length > 120;

    // Calcula el texto del sinopsis a mostrar
    const synopsisText = isLong ? `${synopsis.slice(0, 120)}...` : synopsis;

    const navigate = useNavigate();

    return (
        <Col>
            <Card 
                style={{ height: "100%", cursor: "pointer" }}
                onClick={() => navigate(`/movies/${movie?.id}`)} // Usa el operador de encadenamiento opcional para `id`
            >
                <Card.Img variant="top" src={image} style={{ height: 300, objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{synopsisText}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;