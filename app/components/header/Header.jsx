import styles from "./header.module.css"
const Header = () =>{
    return(
        <div className={styles.noah}>
            <h1 className={styles.h1}>Header</h1>
            <h2 className={styles.h2}>Elenco:</h2>
            <h2 className={styles.pa}>Pablo</h2>
            <h2 className={styles.ra}>Rafael</h2>
            <h2 className={styles.no}>Noah</h2>
            <h2 className={styles.na}>Nathan</h2>
            <h2 className={styles.da}>Daniel</h2>
            <h2 className={styles.ca}>Caio</h2>
        </div>
    )
}
export default Header