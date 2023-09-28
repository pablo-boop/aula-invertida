import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <h1>Aula invertida - TDS2</h1>
        <ul>
          <li>Pablo Couto</li>
          <li>Daniel Santos</li>
          <li>Caio Cicarelli</li>
          <li>Rafael Leal</li>
          <li>Noah</li>
          <li>Nathan Henrique</li>
        </ul>
      </div>
    </main>
  )
}
