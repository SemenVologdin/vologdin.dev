import React from "react";
import styles from './style.module.css';

const Footer = ()=>{
    const links = [
        [
            {title: '🏠 Home', link: 'google.com'},
            {title: '👽 About', link: 'google.com'},
            {title: '🔥 Dashboard', link: 'google.com'}
        ],[
            {title: '💻 GitHub', link: 'google.com'},
            {title: '📫 Gmail', link: 'google.com'},
            {title: '📞 Telegram', link: 'google.com'}
        ],
    ]

    return(
        <>
            <div className={styles.footer_component}>
                {links.map(links => (
                    <div className={styles.footer_row}>
                        {
                            links.map(link=>{
                                return (<a href={link.link} className={styles.footer_row_link}>{link.title}</a>)
                            })
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default Footer