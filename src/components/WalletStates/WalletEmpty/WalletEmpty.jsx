import { WalletCards } from 'lucide-react'
import styles from './WalletEmpty.module.css'

function WalletEmpty({
  title = 'No wallet activity yet',
  description = 'Your reward activity will appear here once you start earning or redeeming rewards.',
}) {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <WalletCards size={30} />
      </div>

      <h2>{title}</h2>

      <p>{description}</p>
    </section>
  )
}

export default WalletEmpty