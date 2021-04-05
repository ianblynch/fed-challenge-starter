import React from 'react';

function Card({card, clickHandler, cardIndex, selectedCard}) {

    return (
        <article className={`card${cardIndex === selectedCard ? ' selected-card' : ''}`} onFocus={()=> clickHandler(cardIndex)}  onClick={()=> clickHandler(cardIndex)} tabIndex={0}>
            <img className="thumb-img" alt="" src={require(`../images/${card.thumbSrc}`)}></img>
            {card.workouts !== undefined &&
                <button className="workouts-tab"  onClick={()=> clickHandler(cardIndex)}>
                    <span className="workouts-number">{card.workouts.length}</span>
                    <span className="workouts-span">WORKOUTS</span>
                    <img className="series-icon" alt="" src={require('../images/series-icon.png')}></img>
                </button>
            }
            <div className="card-info">
                <div className="card-info-top">
                    <h1 className="card-title">{card.title}</h1>
                    <img className="trainer-img" alt="" src={require(`../images/${card.trainerSrc}`)}></img>
                </div>
                <div className="card-info-middle">
                    {card.durationMinutes !== undefined && card.durationSeconds !== undefined &&
                        <div className="time-container">
                            <img className="timer-icon" alt="" src={require('../images/timer-icon.png')}></img>
                            <span className="time-span">{card.durationMinutes}:{card.durationSeconds}</span>
                        </div>
                    }
                    {card.distanceMeters !== undefined &&
                        <div className="distance-container">
                            <img className="track-icon" alt="" src={require('../images/track-icon.png')}></img>
                            <span className="distance-span">{card.distanceMeters} M</span>
                        </div>
                    }
                </div>
                <div className="card-info-bottom">
                    {card.details !== undefined &&
                        <button className="details-link" onClick={()=> clickHandler(cardIndex)}>VIEW DETAILS</button>
                    }
                </div>
            </div>
        </article>
    )
}

export default Card;