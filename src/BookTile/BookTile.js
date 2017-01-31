// The default export of this file becomes the main component
import styles from './BookTile.css';




// This is the exported JSX/React Component
export default ({ title, subtitle, text, className="", onSubmit }) => (
    <div className={`${styles.container} ${className}`}>
        <div className={styles.textWrapper}>
            <h1 className={styles.title}>
                {title}
                <span className={styles.subtitle}>{subtitle}</span>
            </h1>

            <div className={styles.text}>{text}</div>
            {onSubmit && (
                <button className={styles.button} onClick={onSubmit}>
                    submit
                </button>
            )}
        </div>
    </div>
);
