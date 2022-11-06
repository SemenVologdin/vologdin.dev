import React from "react";
import styles from './style.module.css'
import Project from '../Project'

export interface Project{
    id: number
    title: string,
    description: string
}

const Home = ()=>{
    const projects: Project[] = [{id: Date.now(), title: 'Project 1', description: 'You can see a list of all the environmental variables by using phpinfo(). Many of these variables are listed within » RFC 3875, specifically section 4.1, "Request Meta-Variables".'}, {id: Date.now(), title: 'Project 2', description: 'Bla bla bla'}]

    const switchAbout = ()=>{

    }

    return(
        <>
            <div className={styles.home_container}>
                <div className={styles.home_container_description}>
                    <h1>Name</h1>
                    <h3>Grade</h3>
                    <p>Description</p>
                    <p className={styles.home_container_about} onClick={switchAbout}>About</p>
                </div>
                <div className={styles.home_container_avatar}>
                    avatar
                </div>
            </div>

            <div className={styles.projects_container}>
                {projects.map((project, index) => (
                    <Project key={`${project.id}_${index}`} title={project.title} description={project.description}/>
                ))}
            </div>
        </>
    )
}

export default Home