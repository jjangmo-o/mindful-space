import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>About MindfulSpace</h2>
            <p className={styles.description}>
                MindfulSpace was created to provide a moment of calm in a chaotic world. 
            We believe that mental health is just as important as physical health.
            </p>
            <p className={styles.description}>
                <strong>Created by:</strong> jjangmo
            </p>
        </div>
    );
}

export default About;