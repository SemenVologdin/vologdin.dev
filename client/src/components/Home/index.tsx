import React from "react";
import styles from './style.module.css'
import Project from '../Project'
import {Stack} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

export interface IProject{
    id: string
    title: string,
    description: string
}

const Home = ()=>{
    const projects: IProject[] = [
        {id: Date.now().toString(), title: 'Project 1', description: 'You can see a list of all the environmental variables by using phpinfo(). Many of these variables are listed within » RFC 3875, specifically section 4.1, "Request Meta-Variables".'},
        {id: Date.now().toString()+1, title: 'Project 2', description: 'Bla bla bla'}
    ]

    const switchAbout = ()=>{
        // TODO add redux switch
    }

    const openInGithub = (id: string) => {
        let a = document.createElement('a')
        a.href = `https://github.com/SemenVologdin/${id}`
        a.click()
    }

    return(
        <>
            <div className={styles.home_container}>
                <div className={styles.home_container_description}>
                    <h1>Semen Vologdin</h1>
                    <h3>Full Stack developer</h3>
                    <p>Description</p>
                    <p className={styles.home_container_about} onClick={switchAbout}>About</p>
                </div>
                <div className={styles.home_container_avatar}>
                    avatar
                </div>
            </div>

            <h3>Last updated projects</h3>

            <Stack spacing={1} marginBottom={5}>
                {projects.map((project, index) => (
                    <>
                        <Project
                            onclick={() => openInGithub( project.id ) }
                            key={`${project.id}_${index}`}
                            title={project.title}
                            description={project.description}
                        />
                    </>
                ))}
            </Stack>
        </>
    )
}

export default Home