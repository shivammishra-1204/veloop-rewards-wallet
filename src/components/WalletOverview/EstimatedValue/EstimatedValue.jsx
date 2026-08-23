import { ShieldCheck, Star, Info, ArrowRight } from 'lucide-react'
import styles from './EstimatedValue.module.css'

function EstimatedValue() {
  return (
    <section className={styles.card}>
      <div className={styles.gridGlow}></div>

      <div className={styles.heading}>
        <span>TOTAL REWARD VALUE</span>
        <Info size={15} />
      </div>

      <div className={styles.value}>≈ ₹25.67</div>

      <div className={styles.subtitle}>Estimated Value</div>

      <div className={styles.balanceRow}>
        <div className={styles.balance}>
          <div className={styles.coinVe}>▤</div>

          <div>
            <strong>3,850</strong>
            <span>VEs</span>
            <small>Available</small>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.balance}>
          <div className={styles.coinSve}>▤</div>

          <div>
            <strong>1,240</strong>
            <span>SVEs</span>
            <small>Available</small>
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        <span className={styles.verified}>
          <ShieldCheck size={14} />
          Verified
        </span>

        <span className={styles.level}>
          <Star size={14} />
          Level 4
        </span>
      </div>

      <button className={styles.actionButton} type="button">
        <span>Withdraw / Redeem</span>
        <ArrowRight size={20} />
      </button>
    </section>
  )
}

export default EstimatedValue
