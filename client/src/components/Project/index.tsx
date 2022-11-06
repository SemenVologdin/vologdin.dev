import React from 'react'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Tooltip from '@mui/material/Tooltip';
import styles from './style.module.css';

const Project = ( props: any ) => {

    return(
        <>
            <div className={styles.project_card}>
                <div>
                    <p className={styles.project_card_title}>{props.title}</p>
                    <p className={styles.project_card_description}>{props.description}</p>
                </div>

                <div className={styles.project_card_open}>
                    <Tooltip title="Open in GitHub">
                        <KeyboardArrowRightOutlinedIcon/>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default Project