import styles from './page.module.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'


export default function Home() {
  return (
    <main>
      <Header/>
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
        <div className={styles.info}>
          <h2>Informações sobre o projeto</h2>
          <p>
              Nesse projeto iremos usar mais funcionalidades do react alem de estado de variável, para adaptar
            uma atividade feita da sprint passada para o react, sendo essa a "Game List" ou  "Locadora de jogos" .
          </p>
        </div>
      </div>

      <Footer/>
    </main>
  )
}
