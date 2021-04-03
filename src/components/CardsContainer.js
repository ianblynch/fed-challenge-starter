import React from 'react';
import '../App.css';


// {
//     trainerSrc: '',
//     thumbSrc: '',
//     workouts: [],
//     title: '',
//     durationMinutes: 30,
//     durationSeconds: 53,
//     details: true,
// }




const cards = [
    {
        trainerSrc: 'lake-inniscarra-trainer.jpg',
        thumbSrc: 'lake-inniscarra-thumb.jpg',
        title: 'Lake Inniscarra, Ireland-- Pyramid',
        durationMinutes: 30,
        durationSeconds: 53,
        distanceMeters: 6248,
        details: true
    },
    {
        trainerSrc: 'performance-series-trainer.jpg',
        thumbSrc: 'performance-series-thumb.jpg',
        workouts: [1,1,1,1,1,1,1,1,1],
        title: 'Performance Series'
    },
    {
        trainerSrc: 'slow-pulls-trainer.jpg',
        thumbSrc: 'slow-pulls-thumb.jpg',
        title: 'Slow Pulls and Fast Intervals',
        durationMinutes: 44,
        durationSeconds: 13
    },
    {
        trainerSrc: '20-minutes-to-toned-trainer.jpg',
        thumbSrc: '20-minutes-to-toned-thumb.jpg',
        workouts: [1,1,1,1,1,1,1,1,1,1,1,1],
        title: '20 Minutes to Toned'
    },
    {
        trainerSrc: 'charles-race-trainer.jpg',
        thumbSrc: 'charles-race-thumb.jpg',
        title: 'Charles Race, Boston, Massachusetts',
        durationMinutes: 36,
        durationSeconds: 22,
        distanceMeters: 8648
    },
    {
        trainerSrc: 'full-body-hiit-trainer.jpg',
        thumbSrc: 'full-body-hiit-thumb.jpg',
        workouts: [1,1,1,1,1,1,1,1,1,1,1,1],
        title: 'Full-Body HIIT Series'
    },
    {
        trainerSrc: 'kafue-river-trainer.jpg',
        thumbSrc: 'kafue-river-thumb.jpg',
        title: 'Kafue River, Zambia-- Power Stroke Pyramid',
        durationMinutes: 22,
        durationSeconds: 22,
        distanceMeters: 4660
    },
    {
        trainerSrc: 'shred-and-burn-trainer.jpg',
        thumbSrc: 'shred-and-burn-thumb.jpg',
        workouts: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        title: 'Shred & Burn Series'
    }
]

function CardsContainer() {
    return (
        <section className="cards-container">
            cardscontainer
        </section>
    )
}
export default CardsContainer;