import React from 'react'
import styles from './Card.module.css'
import pin from '../../../public/pin.svg'

function Card({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
    return (
        <div className={styles.card}>
            <img src={imageUrl} />
            <div className={styles.InfoBox}>
                <div className={styles.country}>
                    <img src={pin} />
                    <h3>{location}</h3>
                    <a href={googleMapsUrl} > View on Google Maps</a>
                </div>
                <h1 className={styles.h1}>{title}</h1>
                <div className={styles.data}>
                    <span>{startDate}</span> - <span>{endDate}</span>
                </div>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}

export default Card