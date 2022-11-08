import React from 'react'
import styles from './style.module.css';

const Project = ( props: any ) => {

    return(
        <>
            <div className={styles.project_card}>
                <div>
                    <p className={styles.project_card_title}>{props.title}</p>
                    <p className={styles.project_card_description}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Project