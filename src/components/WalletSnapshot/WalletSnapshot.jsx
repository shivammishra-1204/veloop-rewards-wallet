import styles from './WalletSnapshot.module.css'
import { Coins, WalletCards, ArrowDownToLine, Trophy } from 'lucide-react'

function WalletSnapshot() {
  return (
    <section className={styles.snapshot}>
      <div className={styles.card}>
        <div className={`${styles.iconBox} ${styles.purple}`}>
          <Coins size={22} />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>Available VEs</span>
          <strong>3,850</strong>
          <span className={styles.description}>Total VEs you can use</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.iconBox} ${styles.green}`}>
          <WalletCards size={22} />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>Est. Balance</span>
          <strong>≈ ₹25.67</strong>
          <span className={styles.description}>Estimated in INR</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.iconBox} ${styles.blue}`}>
          <ArrowDownToLine size={22} />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>Withdrawn</span>
          <strong>₹120.00</strong>
          <span className={styles.description}>Total withdrawn</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={`${styles.iconBox} ${styles.pink}`}>
          <Trophy size={22} />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>Current Rank</span>
          <strong>Level 4</strong>
          <span className={styles.description}>Keep growing!</span>
        </div>
      </div>
    </section>
  )
}

export default WalletSnapshot
