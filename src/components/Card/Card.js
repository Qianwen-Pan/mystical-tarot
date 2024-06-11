import React from 'react';
import { motion } from 'framer-motion';
import "./Card.scss";

export default function Card({ card, isExpanded, onClick }) {
    return (
        <motion.div 
            className={`card ${isExpanded ? 'expanded' : ''}`}
            layout
            onClick={onClick}
            initial={{ borderRadius: 10 }}
        >
            <motion.img  className={`card__image ${isExpanded ? "card__image--expand" : ""}`} src={`http://localhost:8080/${card.image}`} alt={card.name} layout="responsive" />
            <div
                className="card__modal"
              >
                <p className="home__modal-title">{card.keywords.join(" • ")}</p>
                <p className="home__category-description">{card.shortDescription}</p>
              </div>
            {isExpanded && (
                <motion.div className="card-content" layout>
                    {/* <p><strong>Keywords:</strong> {card.Keywords.join(', ')}</p> */}
                    {/* <p>{card.shortDescription}</p> */}
                    <p className='card__detailedDescription'>{card.detailedDescription}</p>
                </motion.div>
            )}
        </motion.div>
    );
}
