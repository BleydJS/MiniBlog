import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Bleyd Blog &copy; 2023</p>
      <p style={{color: "red", fontWeight: "bold"}}>Responsividade para aparelhos móveis em andamento...</p>
    </footer>
  )
}

export default Footer