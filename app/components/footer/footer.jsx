import styles from "./footer.module.css"
import { AiFillHome } from "react-icons/ai";
const Footer = () =>{
    return(
        <div className={styles.noah}>
            <h1 className={styles.h1}>Footer</h1>
            <AiFillHome className={styles.icon}/>
            <h5 className={styles.h5}>Todos os direitos reservados @2023</h5>
            </div>
    )
}
export default Footer