import React from 'react'
import styles from './Content.module.css'

export default function Content(){

    return(
        <div className={styles.maindiv} >
          <div className={styles.imgdiv}>
            <img style={{height: '50vw',width: '50vw' }} src="https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824" alt="image" />
          </div>
          <div className={styles.textdiv}>
            <p style={{fontSize: '3vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deserunt repellendus praesentium maiores illum, sed porro necessitatibus quas eius temporibus, nihil tenetur fugiat! Deleniti voluptatibus maxime fuga excepturi, voluptatem facere?</p>
          </div>
        </div>
    )
}