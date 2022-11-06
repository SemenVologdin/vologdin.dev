import React from "react";
import styles from './style.module.css';

const Footer = ()=>{
    const links = [
        [
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'}
        ],[
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'}
        ],[
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'},
            {title: 'Title1', link: 'google.com'}
        ]
    ]

    return(
        <>
            <div className={styles.footer_component}>
                {links.map(links => (
                    <div className={styles.footer_component}>
                        {
                            links.map(link=>{
                                return (<a href={link.link}>{link.title}</a>)
                            })
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default Footer