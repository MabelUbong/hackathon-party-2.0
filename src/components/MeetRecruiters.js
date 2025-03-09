import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MeetRecruiters.css';

const MeetRecruiters = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const recruiters = [
        {
            id: 1,
            character: 'blinky',
            company: 'Softwire',
            description: 'Leading software development consultancy',
            role: 'Come and find out about opportunities with us',
            imageUrl: 'assets/blinky.webp'
        },
        {
            id: 2,
            character: 'pinky',
            company: 'Starling Bank',
            description: 'Britain’s first digital bank',
            role: 'Come and have a chat with us',
            imageUrl: 'assets/pinky.webp'
        },
        {
            id: 3,
            character: 'inky',
            company: 'Addition',
            description: 'RECRUITMENT Age',
            role: 'Cloud Solutions Architect',
            imageUrl: 'assets/inky.webp'
        },
        {
            id: 4,
            character: 'clyde',
            company: 'Meta',
            description: 'Social media and virtual reality pioneer',
            role: 'Frontend Engineer',
            imageUrl: 'assets/clyde.webp'
        },
        {
            id: 5,
            character: 'blue_ghost',
            company: 'Apple',
            description: 'Innovation leader in consumer technology',
            role: 'iOS Developer',
            imageUrl: 'assets/blue_ghost.webp'
        }
    ];

    const handleCardClick = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const cardStyle = {
        width: '200px',
        height: '300px',
        margin: '15px',
        perspective: '1000px',
        cursor: 'pointer'
    };

    const cardInnerStyle = (isFlipped) => ({
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : ''
    });

    const cardFaceStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d2d2d',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        border: '2px solid #FFD700',
        color: '#FFD700'
    };

    const cardBackStyle = {
        ...cardFaceStyle,
        transform: 'rotateY(180deg)',
        backgroundColor: '#2d2d2d',
        padding: '20px'
    };

    return (
        <div className="meet-recruiters-container">
            <Container>
                <h1 className="text-center mb-5 meet-recruiters-title">
                    Meet Our Sponsors
                </h1>
                <Row className="justify-content-center">
                    {recruiters.map((recruiter) => (
                        <Col key={recruiter.id} xs={12} sm={6} md={4} lg={3} 
                             className="d-flex justify-content-center">
                            <div
                                style={cardStyle}
                                onClick={() => handleCardClick(recruiter.id)}
                                className="card-container"
                            >
                                <div style={cardInnerStyle(flippedCards[recruiter.id])}>
                                    {/* Front of card */}
                                    <div style={cardFaceStyle} className="card-face">
                                        <img
                                            src={recruiter.imageUrl}
                                            alt={recruiter.character}
                                            className="character-image"
                                        />
                                        <h3 className="character-name" style={{textTransform: 'capitalize'}}>
                                            {recruiter.character}
                                        </h3>
                                    </div>
                                    {/* Back of card */}
                                    <div style={cardBackStyle} className="card-face">
                                        <h4 className="company-title mb-3">
                                            {recruiter.company}
                                        </h4>
                                        <p className="company-description">
                                            {recruiter.description}
                                        </p>
                                        <p className="role-text mt-3">
                                            <strong>Message:</strong><br/>
                                            {recruiter.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MeetRecruiters;
