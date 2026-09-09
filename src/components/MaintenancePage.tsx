import styles from "./Maintenance.module.css";

export default function MaintenancePage() {
    return (
        <div className={styles.MaintenanceContainer}>
            <div className={styles.overlay}></div>

            <div className={styles.contentWrapper}>
                <div className={styles.brand}>
                    <span className={styles.logoText}>Ely<span className={styles.logoAccent}>sian</span></span>
                    <span className={styles.tagline}><p> —Farm and Resorts</p></span>
                </div>

                <h1 className={styles.title}>We are building a new experience for you.</h1>
                <p className={styles.description}>
                    Our website is currently undergoing maintenance. We apologize for any inconvenience and appreciate your patience. Please check back soon!
                </p>

                <div className={styles.contactInfo}>
                    <p>For inquiries, please contact us at:</p>
                    <p>Email: <a href="mailto:info@elysian.com">info@elysian.com</a></p>
                </div>

                <div className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Elysian Farm and Resorts. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}